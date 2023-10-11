# các lệnh sql cơ bản

- Tạo database:
  CREATE DATABASE database_name;

- Chọn csdl để sử dụng:
  USE database_name;

- Tạo bảng dữ liệu:
  CREATE TABLE table_name (
  column_1 datatype constraint,
  column_2 datatype constraint,
  column_3 datatype constraint
  );

  trong đó constraint có thể là:
  NOT NULL
  UNIQUE
  PRIMARY KEY
  FOREIGN KEY
  CHECK
  DEFAULT
  INDEX

- Xóa bảng:
  DROP TABLE table_name;

- Thêm cột:
  ALTER TABLE table_name
  ADD column_name datatype;

- Xóa cột:
  ALTER TABLE table_name
  DROP COLUMN column_name;

- Sửa cột:
  ALTER TABLE table_name
  MODIFY COLUMN column_name datatype;

- Thêm dữ liệu:
  INSERT INTO table_name(column1, column2,...)
  VALUES(value1, value2,...);

- Sửa dữ liệu:
  UPDATE table_name
  SET column1 = value1, column2 = value2,...
  WHERE condition;

- Xóa dữ liệu:
  DELETE table_name WHERE condition;
