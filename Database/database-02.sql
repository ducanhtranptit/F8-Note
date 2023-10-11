-- CREATE DATABASE F8_BACKEND_K1;
-- Tạo bảng user
USE F8_BACKEND_K1;


CREATE TABLE
  users(
    id int,
    name varchar(50),
    email varchar(100),
    password varchar(100),
    status tinyint(1),
    created_at datetime,
    updated_at datetime
  );


-- XEM DANH SÁCH TABLE
USE F8_BACKEND_K1;


SHOW TABLES;


--XEM CẤU TRÚC TABLE
USE F8_BACKEND_K1;


DESCRIBE users;


--sửa bảng
-- 1. thêm 1 cột mới
USE F8_BACKEND_K1;


ALTER TABLE
  users
ADD
  phone varchar(15) AFTER status -- 2. sửa cột, sửa kí tự
  USE F8_BACKEND_K1;


ALTER TABLE
  users MODIFY COLUMN phone varchar(20) --3. sửa tên trường
  USE F8_BACKEND_K1;


ALTER TABLE
  users RENAME COLUMN phone to phone_num -- sửa cả 2
  USE F8_BACKEND_K1;


ALTER TABLE
  users CHANGE COLUMN phone phone_num varchar(19) -- xóa bảng
  USE F8_BACKEND_K1;


ALTER TABLE
  users DROP COLUMN phone_num;