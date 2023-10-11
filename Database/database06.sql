USE database_01_tenhocvien;
SELECT * FROM users;
SELECT * FROM posts;
SELECT * FROM groups;

INSERT INTO groups (id, name, created_at, update_at)
VALUES
(1, 'name-1', NOW(), NOW()),
(2, 'name-2', NOW(), NOW());

USE database_01_tenhocvien;
INSERT INTO users (id, name, email, password, group_id, create_at, update_at)
VALUES
(1, 'name-1', 'email-1', 'password-1', 1, NOW(), NOW()),
(2, 'name-2', 'email-2', 'password-2', 2, NOW(), NOW());

USE database_01_tenhocvien;
INSERT INTO posts (id, title, content, user_id, created_at, updated_at)
VALUES
(1, 'title-1', 'content-1', 1, NOW(), NOW()),
(2, 'title-2', 'content-2', 2, NOW(), NOW());
