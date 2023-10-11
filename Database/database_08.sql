use f8_backend_k1;

create index product_name on users (name);

describe users;

alter table users
drop index product_name;

create table
  products (
    id int PRIMARY KEY auto_increment,
    name varchar(100),
    price float DEFAULT 0
  );

describe products;