USE F8_BACKEND_K1;


DESCRIBE users;


--thêm dữ liệu vào bảng
USE F8_BACKEND_K1;


INSERT INTO
  users(
    id,
    name,
    email,
    PASSWORD,
    STATUS,
    created_at,
    updated_at
  ) VALUE (
    1,
    'Bimbeo',
    'tda.ducanh@gmail.com',
    '123456',
    1,
    '2023-08-21 09:00:00',
    '2023-08-21 09:00:00'
  ) USE F8_BACKEND_K1;


INSERT INTO
  users(
    id,
    name,
    email,
    PASSWORD,
    STATUS,
    created_at,
    updated_at
  ) VALUE (
    2,
    'Hoang An',
    'tda.@gmail.com',
    '123456',
    1,
    '2023-08-21 09:00:00',
    '2023-08-21 09:00:00'
  ) --hiển thị danh sách dữ liệu
  USE F8_BACKEND_K1;


SELECT
  *
FROM
  users USE F8_BACKEND_K1;


UPDATE
  users
SET
  name = 'ducanh'
WHERE
  id = 1;