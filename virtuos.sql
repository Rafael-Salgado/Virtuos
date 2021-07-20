USE virtuos;
CREATE TABLE if not exists users (
  id int auto_increment primary key,
  user_name varchar(50) not null,
  user_lastname varchar(50) not null,
  user_email varchar(50) not null,
  user_phone int not null,
  user_password varchar(59) not null
);

CREATE TABLE if not exists products (
  id int auto_increment primary key,
  product_name varchar(255) not null,
  price int not null,
  provee varchar(255) not null,
  descrption varchar(255),
  song varchar(255),
  stock int not null
);



CREATE TABLE if not exists address (
  id int auto_increment primary key,
  user_address varchar(255) not null,
  zip_code int not null,
  country varchar(255) not null,
  user int,
 foreign key (user)
 REFERENCES users (id)
        ON UPDATE RESTRICT ON DELETE CASCADE
);

CREATE TABLE if not exists pays (
  id int auto_increment primary key,
  card_name varchar(50) not null,
   card_number int not null,
   cvv int not null,
   expiration_date int not null,
  user int,
  foreign key (user)
  REFERENCES users (id)
        ON UPDATE RESTRICT ON DELETE CASCADE
);

CREATE TABLE if not exists buy_products (
  id int auto_increment primary key,
  sale_date datetime not null,
  product int not null,
  user int not null,
  pay int not null,
  foreign key (product)
  REFERENCES products (id)
        ON UPDATE RESTRICT ON DELETE CASCADE,
 foreign key (user)
  REFERENCES users (id)
        ON UPDATE RESTRICT ON DELETE CASCADE,
  foreign key (pay)
  REFERENCES pays (id)
        ON UPDATE RESTRICT ON DELETE CASCADE
);



