create database bootcamp;
create table students(
	id serial primary key not null unique,
	first_name varchar(15) not null,
	last_name varchar(15) not null
);