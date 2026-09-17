# Node backend setup

Node.js is already required for the React app. The API runs from this folder on port 4000.

1. Copy `.env.example` to `.env` and keep the Node API port as `API_PORT=4000` so React can use port 3000.
2. Put the MySQL and SMTP values in `.env`. For Gmail, use a Google app password, not your normal account password.
3. Import `../Backend/blog_database.sql` into MySQL if the `expert_assignments_blog` database does not exist yet.
4. Install dependencies with `npm install`.
5. Start the API with `npm run server`.
6. Start React in another terminal with `npm start`.

Useful checks:

- `GET http://localhost:4000/api/health` checks MySQL and reports whether mail credentials are present.
- Public forms post to `/api/forms/send`.
- Public blog requests use `/api/blog?action=list` and `/api/blog?action=post&slug=...`.
- Admin login is `POST /api/admin/login`; send its returned token as `Authorization: Bearer <token>` for admin routes.

The original MySQL tables and existing PHP password hashes remain compatible. Do not commit `.env`.
