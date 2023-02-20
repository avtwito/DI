create table items(
	product varchar(35) not null,
	price smallint not null check (price > 0)
);
create table customers(
	first_name varchar(15) not null,
	last_name varchar(15) not null
);