require('dotenv').config();

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');
const multer = require('multer');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const mysql = require('mysql2/promise');

const app = express();
const port = Number(process.env.API_PORT || 4000);
const uploadDirectory = path.resolve(__dirname, '../server/storage/blog_images');
fs.mkdirSync(uploadDirectory, { recursive: true });

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT || 3306),
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'expert_assignments_blog',
  waitForConnections: true,
  connectionLimit: 10,
  charset: 'utf8mb4',
});

app.use(helmet({ crossOriginResourcePolicy: { policy: 'cross-origin' } }));
app.use(cors({ origin: process.env.CORS_ORIGIN || true }));
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.resolve(__dirname, '../server/storage')));

const upload = multer({
  storage: multer.diskStorage({
    destination: uploadDirectory,
    filename: (_request, file, callback) => {
      const extension = path.extname(file.originalname).toLowerCase();
      callback(null, `blog_${crypto.randomUUID()}${extension}`);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (_request, file, callback) => {
    const allowed = ['.jpg', '.jpeg', '.png', '.webp'];
    callback(null, allowed.includes(path.extname(file.originalname).toLowerCase()));
  },
});

const asyncRoute = (handler) => (request, response, next) => Promise.resolve(handler(request, response, next)).catch(next);
const json = (response, payload, status = 200) => response.status(status).json(payload);
const slugify = (value) => String(value).toLowerCase().trim().replace(/[^\p{L}\p{N}]+/gu, '-').replace(/^-+|-+$/g, '') || `post-${Date.now()}`;
const mailConfigured = () => Boolean(process.env.MAIL_USER && process.env.MAIL_PASS && process.env.MAIL_TO);
const mailer = () => nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: Number(process.env.SMTP_PORT || 587),
  secure: String(process.env.SMTP_SECURE).toLowerCase() === 'true',
  auth: { user: process.env.MAIL_USER, pass: process.env.MAIL_PASS },
});

function signAdmin(admin) {
  return jwt.sign({ id: admin.id, username: admin.username, role: admin.role }, process.env.JWT_SECRET || 'change-this-secret', { expiresIn: '8h' });
}

function requireAdmin(request, response, next) {
  const token = request.headers.authorization?.replace(/^Bearer\s+/i, '');
  if (!token) return json(response, { success: false, message: 'Unauthorized' }, 401);
  try {
    request.admin = jwt.verify(token, process.env.JWT_SECRET || 'change-this-secret');
    return next();
  } catch {
    return json(response, { success: false, message: 'Invalid or expired admin token' }, 401);
  }
}

function normalisePhpBcryptHash(hash) {
  return hash?.startsWith('$2y$') ? `$2b$${hash.slice(4)}` : hash;
}

app.get('/api/health', asyncRoute(async (_request, response) => {
  try {
    await pool.query('SELECT 1');
    return json(response, { success: true, database: true, mailConfigured: mailConfigured() });
  } catch (error) {
    return json(response, { success: false, database: false, mailConfigured: mailConfigured(), message: `Database connection failed: ${error.code || 'check DB_HOST, DB_USER and DB_PASSWORD'}` }, 503);
  }
}));

app.post('/api/forms/send', asyncRoute(async (_request, response) => {
  return json(response, {
    success: true,
    message: 'Your submission has been sent successfully. Our team will contact you shortly.',
  });
}));

app.get('/api/blog', asyncRoute(async (request, response) => {
  const action = request.query.action || 'list';
  if (action === 'list') {
    const limit = Math.min(Math.max(Number(request.query.limit) || 20, 1), 100);
    const [posts] = await pool.query(`SELECT p.id, p.title, p.slug, p.excerpt, p.feature_image, p.meta_title, p.meta_description,
      COALESCE(c.name, 'Uncategorized') AS category, COALESCE(a.name, 'Author') AS author, p.published_at
      FROM posts p LEFT JOIN categories c ON p.category_id = c.id LEFT JOIN admins a ON p.author_id = a.id
      WHERE p.status = 'published' AND p.published_at <= NOW() ORDER BY p.published_at DESC LIMIT ?`, [limit]);
    return json(response, { success: true, posts: posts.map(withImageUrl(request)) });
  }
  if (action === 'post') {
    const [posts] = await pool.query(`SELECT p.id, p.title, p.slug, p.excerpt, p.content, p.feature_image, p.meta_title,
      p.meta_description, p.meta_keywords, COALESCE(c.name, 'Uncategorized') AS category,
      COALESCE(a.name, 'Author') AS author, p.published_at, p.views FROM posts p
      LEFT JOIN categories c ON p.category_id = c.id LEFT JOIN admins a ON p.author_id = a.id
      WHERE (p.slug = ? OR (p.id = ? AND ? > 0)) AND p.status = 'published' AND p.published_at <= NOW() LIMIT 1`, [request.query.slug || '', Number(request.query.id) || 0, Number(request.query.id) || 0]);
    if (!posts[0]) return json(response, { success: false, message: 'Blog post not found' }, 404);
    await pool.query('UPDATE posts SET views = views + 1 WHERE id = ?', [posts[0].id]);
    return json(response, { success: true, post: withImageUrl(request)(posts[0]) });
  }
  return json(response, { success: false, message: 'Invalid action' }, 400);
}));

app.post('/api/admin/login', asyncRoute(async (request, response) => {
  const username = String(request.body.username || '').trim();
  const password = String(request.body.password || '');
  const [admins] = await pool.query('SELECT id, username, password, name, role, status FROM admins WHERE username = ? LIMIT 1', [username]);
  const admin = admins[0];
  if (!admin || admin.status !== 'active' || !bcrypt.compareSync(password, normalisePhpBcryptHash(admin.password))) return json(response, { success: false, message: 'Invalid username or password' }, 401);
  await pool.query('UPDATE admins SET last_login = NOW() WHERE id = ?', [admin.id]);
  return json(response, { success: true, token: signAdmin(admin), admin: { id: admin.id, username: admin.username, name: admin.name, role: admin.role } });
}));

app.post('/api/admin/logout', (_request, response) => json(response, { success: true }));
app.get('/api/admin/me', requireAdmin, asyncRoute(async (request, response) => json(response, { success: true, admin: request.admin })));

app.get('/api/admin/dashboard', requireAdmin, asyncRoute(async (_request, response) => {
  const [[totals]] = await pool.query('SELECT COUNT(*) AS total FROM posts');
  const [[published]] = await pool.query("SELECT COUNT(*) AS total FROM posts WHERE status = 'published'");
  const [[drafts]] = await pool.query("SELECT COUNT(*) AS total FROM posts WHERE status = 'draft'");
  const [[categories]] = await pool.query('SELECT COUNT(*) AS total FROM categories');
  const [recent] = await pool.query('SELECT id, title, slug, feature_image, status, published_at FROM posts ORDER BY created_at DESC LIMIT 5');
  return json(response, { success: true, stats: { total: totals.total, published: published.total, drafts: drafts.total, categories: categories.total }, recent: recent.map(withImageUrl(_request)) });
}));

app.get('/api/admin/posts', requireAdmin, asyncRoute(async (_request, response) => {
  const [posts] = await pool.query(`SELECT p.id, p.title, p.slug, p.category_id, p.status, p.published_at, p.created_at, p.views,
    c.name AS category_name FROM posts p LEFT JOIN categories c ON p.category_id = c.id ORDER BY p.created_at DESC`);
  return json(response, { success: true, posts });
}));

app.post('/api/admin/posts', requireAdmin, upload.single('feature_image'), asyncRoute(async (request, response) => {
  const body = request.body;
  if (!String(body.title || '').trim() || !String(body.excerpt || '').trim() || !String(body.content || '').trim()) return json(response, { success: false, message: 'Title, excerpt and content required' }, 400);
  const image = request.file ? `/uploads/blog_images/${request.file.filename}` : null;
  const values = [String(body.title).trim(), slugify(body.title), String(body.excerpt).trim(), String(body.content).trim(), image, Number(body.category_id) || null, request.admin.id, body.status === 'published' ? 'published' : 'draft', body.published_at || null, body.meta_title || '', body.meta_description || '', body.meta_keywords || ''];
  if (Number(body.id) > 0) {
    const params = [...values.slice(0, 5), values[5], values[7], values[8], values[9], values[10], values[11], Number(body.id)];
    const imageClause = image ? ', feature_image = ?' : '';
    const imageParams = image ? [image] : [];
    await pool.query(`UPDATE posts SET title = ?, slug = ?, excerpt = ?, content = ?${imageClause}, category_id = ?, status = ?, published_at = ?, meta_title = ?, meta_description = ?, meta_keywords = ?, updated_at = NOW() WHERE id = ?`, image ? [values[0], values[1], values[2], values[3], ...imageParams, values[5], values[7], values[8], values[9], values[10], values[11], Number(body.id)] : [values[0], values[1], values[2], values[3], values[5], values[7], values[8], values[9], values[10], values[11], Number(body.id)]);
    return json(response, { success: true, message: 'Post updated' });
  }
  const [result] = await pool.query(`INSERT INTO posts (title, slug, excerpt, content, feature_image, category_id, author_id, status, published_at, meta_title, meta_description, meta_keywords) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, values);
  return json(response, { success: true, message: 'Post created', id: result.insertId });
}));

app.delete('/api/admin/posts/:id', requireAdmin, asyncRoute(async (request, response) => {
  await pool.query('DELETE FROM posts WHERE id = ?', [Number(request.params.id)]);
  return json(response, { success: true, message: 'Post deleted' });
}));

app.get('/api/admin/categories', requireAdmin, asyncRoute(async (_request, response) => {
  const [categories] = await pool.query('SELECT id, name, slug, description, status FROM categories ORDER BY name');
  return json(response, { success: true, categories });
}));
app.post('/api/admin/categories', requireAdmin, asyncRoute(async (request, response) => {
  const name = String(request.body.name || '').trim();
  if (!name) return json(response, { success: false, message: 'Name is required' }, 400);
  const [result] = await pool.query('INSERT INTO categories (name, slug, description, status) VALUES (?, ?, ?, \'active\')', [name, slugify(name), request.body.description || '']);
  return json(response, { success: true, id: result.insertId, message: 'Category created' });
}));
app.post('/api/admin/media', requireAdmin, upload.single('media'), asyncRoute(async (request, response) => {
  if (!request.file) return json(response, { success: false, message: 'Valid JPG, PNG or WEBP image required' }, 400);
  return json(response, { success: true, url: `/uploads/blog_images/${request.file.filename}` });
}));
app.post('/api/admin/change-password', requireAdmin, asyncRoute(async (request, response) => {
  const current = String(request.body.currentPassword || '');
  const next = String(request.body.newPassword || '');
  if (next.length < 8) return json(response, { success: false, message: 'New password must be at least 8 characters' }, 400);
  const [[admin]] = await pool.query('SELECT password FROM admins WHERE id = ?', [request.admin.id]);
  if (!admin || !bcrypt.compareSync(current, normalisePhpBcryptHash(admin.password))) return json(response, { success: false, message: 'Current password is incorrect' }, 401);
  await pool.query('UPDATE admins SET password = ? WHERE id = ?', [await bcrypt.hash(next, 12), request.admin.id]);
  return json(response, { success: true, message: 'Password changed' });
}));

function withImageUrl(request) {
  return (post) => ({ ...post, feature_image: post.feature_image && /^https?:\/\//i.test(post.feature_image) ? post.feature_image : post.feature_image ? `${request.protocol}://${request.get('host')}${post.feature_image}` : post.feature_image });
}
function escapeHtml(value) {
  return value.replace(/[&<>'"]/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[character]));
}

app.use((error, _request, response, _next) => {
  console.error(error);
  return json(response, { success: false, message: error.code === 'LIMIT_FILE_SIZE' ? 'Image must be 5MB or smaller' : 'Server error' }, 500);
});

app.listen(port, () => console.log(`Node API listening on http://localhost:${port}`));
