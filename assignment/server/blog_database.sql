-- Blog database schema for Expert Assignments Website
-- Run this in MySQL or phpMyAdmin to create the blog database and all required tables.

CREATE DATABASE IF NOT EXISTS `expert_assignments_blog`
  DEFAULT CHARACTER SET utf8mb4
  DEFAULT COLLATE utf8mb4_unicode_ci;
USE `expert_assignments_blog`;

-- Admins table for portal access
CREATE TABLE IF NOT EXISTS `admins` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(100) NOT NULL UNIQUE,
  `password` VARCHAR(255) NOT NULL,
  `name` VARCHAR(150) NULL,
  `email` VARCHAR(150) NULL,
  `role` ENUM('admin','editor') NOT NULL DEFAULT 'admin',
  `status` ENUM('active','inactive') NOT NULL DEFAULT 'active',
  `last_login` DATETIME NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Categories for blog posts. Use this to classify posts into subject areas, news, tips, etc.
CREATE TABLE IF NOT EXISTS `categories` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(120) NOT NULL UNIQUE,
  `slug` VARCHAR(140) NOT NULL UNIQUE,
  `description` TEXT NULL,
  `parent_id` INT UNSIGNED NULL,
  `status` ENUM('active','archived') NOT NULL DEFAULT 'active',
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `parent_id_idx` (`parent_id`),
  CONSTRAINT `fk_categories_parent` FOREIGN KEY (`parent_id`) REFERENCES `categories`(`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Tags table for more flexible post filtering and SEO.
CREATE TABLE IF NOT EXISTS `tags` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(120) NOT NULL UNIQUE,
  `slug` VARCHAR(140) NOT NULL UNIQUE,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Blog posts table with SEO fields and featured image.
CREATE TABLE IF NOT EXISTS `posts` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `slug` VARCHAR(255) NOT NULL UNIQUE,
  `excerpt` TEXT NOT NULL,
  `content` LONGTEXT NOT NULL,
  `feature_image` VARCHAR(255) NULL,
  `category_id` INT UNSIGNED NULL,
  `author_id` INT UNSIGNED NULL,
  `status` ENUM('draft','published','archived') NOT NULL DEFAULT 'draft',
  `published_at` DATETIME NULL,
  `meta_title` VARCHAR(255) NULL,
  `meta_description` VARCHAR(255) NULL,
  `meta_keywords` VARCHAR(255) NULL,
  `views` INT UNSIGNED NOT NULL DEFAULT 0,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `category_idx` (`category_id`),
  KEY `author_idx` (`author_id`),
  KEY `published_at_idx` (`published_at`),
  CONSTRAINT `fk_posts_category` FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `fk_posts_author` FOREIGN KEY (`author_id`) REFERENCES `admins`(`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Linking table for posts and tags.
CREATE TABLE IF NOT EXISTS `post_tags` (
  `post_id` INT UNSIGNED NOT NULL,
  `tag_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`post_id`,`tag_id`),
  KEY `tag_idx` (`tag_id`),
  CONSTRAINT `fk_post_tags_post` FOREIGN KEY (`post_id`) REFERENCES `posts`(`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_post_tags_tag` FOREIGN KEY (`tag_id`) REFERENCES `tags`(`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Optional comments table if you want to add blog comments later.
CREATE TABLE IF NOT EXISTS `comments` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `post_id` INT UNSIGNED NOT NULL,
  `name` VARCHAR(120) NOT NULL,
  `email` VARCHAR(150) NULL,
  `content` TEXT NOT NULL,
  `status` ENUM('pending','approved','spam') NOT NULL DEFAULT 'pending',
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `post_idx` (`post_id`),
  CONSTRAINT `fk_comments_post` FOREIGN KEY (`post_id`) REFERENCES `posts`(`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Example seed data for categories, tags, and admin account.
INSERT INTO `categories` (`name`, `slug`, `description`) VALUES
  ('Essay Tips', 'essay-tips', 'Guides and advice for writing high-quality essays.'),
  ('Assignment Help', 'assignment-help', 'Information on assignment support and order advice.'),
  ('Study Strategies', 'study-strategies', 'Productivity and research techniques for students.'),
  ('Academic News', 'academic-news', 'Latest updates and news from the academic world.');

INSERT INTO `tags` (`name`, `slug`) VALUES
  ('SEO', 'seo'),
  ('Research', 'research'),
  ('Writing Tips', 'writing-tips'),
  ('Dissertation', 'dissertation');

INSERT INTO `admins` (`username`, `password`, `name`, `email`, `role`) VALUES
  ('admin', '$2y$10$Rcn8X3xy3JNRrTvmJxTW5e26lYw8pCmQtclY1aIab58pwvBfVXSCi', 'Site Admin', 'admin@expertwriters.uk', 'admin');

INSERT INTO `posts` (`title`, `slug`, `excerpt`, `content`, `feature_image`, `category_id`, `author_id`, `status`, `published_at`, `meta_title`, `meta_description`, `meta_keywords`) VALUES
  ('How to Write a High-Scoring Academic Essay', 'how-to-write-a-high-scoring-academic-essay', 'Learn a step-by-step approach to writing essays that impress markers and boost grades.', '<p>Start with a strong thesis, structure your argument clearly, support every claim with academic sources, and proofread thoroughly.</p>', '/uploads/blog_images/sample-essay.jpg', 1, 1, 'published', NOW(), 'High-Scoring Academic Essay Writing Guide', 'Follow these proven tips to write essays that score highly in UK universities.', 'essay writing, academic essay, study tips');

INSERT INTO `post_tags` (`post_id`, `tag_id`) VALUES
  (1, 2),
  (1, 3);

-- Notes:
-- 1) Run this SQL directly in MySQL or phpMyAdmin.
-- 2) Use the database name `expert_assignments_blog` in your PHP config.
-- 3) The seeded admin password is: Admin@123
-- 4) Add more categories, tags, and posts as needed for your blog.
