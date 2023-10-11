USE F8_BACKEND_K1;
CREATE TABLE products(
  id int,
  name varchar(50),
  content text,
  price float,
  sale_price float,
  status tinyint(1),
  created_at timestamp,
  updated_at timestamp
);

ALTER TABLE products ADD description varchar(15) AFTER sale_price;
ALTER TABLE products ADD promotion varchar(15) AFTER description;

ALTER TABLE products RENAME COLUMN price TO regular_price;

INSERT INTO products(id, name, content, regular_price, sale_price, description, promotion, status, created_at, updated_at) VALUES (1, 'user1', 'content id1', 100000.0, 123454, 'description id1', 'promotion id1', 1, '2023-08-21 09:00:00', NOW());

INSERT INTO products(id, name, content, regular_price, sale_price, description, promotion, status, created_at, updated_at) VALUES (2, 'user2', 'content id2', 100000.0, 123454, 'description id2', 'promotion id2', 1, '2023-08-21 09:00:00', NOW());

INSERT INTO products(id, name, content, regular_price, sale_price, description, promotion, status, created_at, updated_at) VALUES (3, 'user3', 'content id3', 100000.0, 123454, 'description id3', 'promotion id3', 1, '2023-08-21 09:00:00', NOW());

SELECT * FROM products;

DROP TABLE products;