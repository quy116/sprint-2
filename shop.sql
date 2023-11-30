create database shop;
use shop;
create table `user` (
id bigint primary key auto_increment,
user_name varchar(255),
full_name varchar(255),
email varchar(255),
address varchar(255),
image varchar(255),
phone varchar(255),
`password` varchar(255),
flag_deleted bit default 1
);
create table `role` (
id bigint primary key auto_increment,
name_role varchar(255),
is_deleted bit default 1
);

create table user_detail_role(
id bigint primary key auto_increment,
user_id bigint not null,
role_id bigint not null,
foreign key(user_id) references `user`(id),
foreign key(role_id) references `role`(id)
);
create table type_product(
id_type bigint primary key auto_increment,
name_type varchar(255)
);
create table product(
id_product bigint primary key auto_increment,
name_product varchar(255),
quantity int,
price float,
`description` longtext,
is_deleted bit default 1,
id_type bigint not null,
foreign key(id_type) references type_product(id_type)
);
create table image(
id bigint primary key auto_increment,
image_path longtext,
flag_deleted bit default 1,
id_product bigint not null,
foreign key(id_product) references product(id_product)
);
create table orders(
id bigint primary key auto_increment,
date_time datetime,
is_deleted bit default 1,
user_id bigint not null,
foreign key(user_id) references `user`(id)
);
create table orders_detail(
id bigint primary key auto_increment,
price decimal(10,2),
quantity int,
flag_deleted bit default 1,
id_order bigint not null,
id_product bigint not null,
foreign key(id_order) references orders(id),
foreign key(id_product) references product(id_product)
);
create table cart_detail(
id bigint auto_increment primary key,
quantity int,
user_id bigint not null,
id_product bigint not null,
foreign key(user_id) references `user`(id),
foreign key(id_product) references product(id_product)
);