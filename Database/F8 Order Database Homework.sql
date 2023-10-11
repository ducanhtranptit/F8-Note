CREATE TABLE `customers` (
  `id` int PRIMARY KEY,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) UNIQUE NOT NULL,
  `phone` varchar(15) NOT NULL,
  `password` varchar(100) NOT NULL,
  `created_at` timestamp,
  `updated_at` timestamp
);

CREATE TABLE `products` (
  `id` int PRIMARY KEY,
  `category_id` int,
  `sku` varchar(10) NOT NULL,
  `name` varchar(200) NOT NULL,
  `description` text,
  `price` float DEFAULT 0,
  `thumbnail` varchar(150),
  `created_at` timestamp,
  `updated_at` timestamp
);

CREATE TABLE `product_categories` (
  `id` int PRIMARY KEY,
  `name` varchar(200) NOT NULL,
  `created_at` timestamp,
  `updated_at` timestamp
);

CREATE TABLE `status` (
  `id` int PRIMARY KEY,
  `name` varchar(100) NOT NULL,
  `created_at` timestamp,
  `updated_at` timestamp
);

CREATE TABLE `order` (
  `id` int PRIMARY KEY,
  `customers_id` int NOT NULL,
  `status_id` int NOT NULL,
  `quantity` int NOT NULL,
  `total` float NOT NULL,
  `created_at` timestamp,
  `updated_at` timestamp
);

CREATE TABLE `order_detal` (
  `id` int PRIMARY KEY,
  `order_id` int NOT NULL,
  `product_id` int NOT NULL,
  `price` float NOT NULL,
  `quantity` int NOT NULL,
  `amount` float NOT NULL,
  `created_at` timestamp,
  `updated_at` timestamp
);

ALTER TABLE `products` ADD FOREIGN KEY (`id`) REFERENCES `product_categories` (`id`);

ALTER TABLE `order` ADD FOREIGN KEY (`customers_id`) REFERENCES `customers` (`id`);

ALTER TABLE `order` ADD FOREIGN KEY (`status_id`) REFERENCES `status` (`id`);

ALTER TABLE `order_detal` ADD FOREIGN KEY (`order_id`) REFERENCES `order` (`id`);

ALTER TABLE `order_detal` ADD FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);
f8_orders