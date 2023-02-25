-- Get a list of all films joined with their languages – select the following details : film title, description, and language name. Try your query with different joins:
select distinct language.name from language
inner join film
on language.language_id = film.language_id;
-- Get a list of all film languages.

-- Get all films, even if they don’t have languages.
select film.title, film.description, language.name as language
from film
left join language
on film.language_id = language.language_id;

select film.title, film.description, language.name as language
from film
right join language
on film.language_id = language.language_id;

select film.title, film.description, language.name as language
from film
join language
on film.language_id = language.language_id;

-- Get all languages, even if there are no films in those languages.
select language.name as language, film.title, film.description
from language
left join film
on film.language_id = language.language_id;

-- Create a new table called new_film with the following columns:
-- id, name. Add some new films to the table.
-- create table new_film(
-- 	id serial primary key,
-- 	name varchar(20) not null
-- );


-- Create a new table called customer_review,
-- which will contain film reviews that customers will make.
-- Think about the DELETE constraint:
-- if a film is deleted, its review should be automatically deleted.

-- create table customer_review(
-- 	review_id serial primary key,
-- 	film_id integer 
-- 	references new_film (id)
-- 	on delete cascade,
-- 	language_id integer references language (language_id)
-- 	on delete restrict,
-- 	title varchar(300),
-- 	score smallint,
-- 	review_text varchar,
-- 	last_update date default now()
-- );

-- insert into new_film(name)
-- values ('Harry Potter'), ('Sherlock'), ('Iron man');

-- insert into customer_review(film_id, language_id, title, score, review_text)
-- values 
-- 	(1, 1, 'My childhood movie', 10, 'It is a mandatory movie and recommended to everyone from the age of 6.'),
-- 	(2, 3, 'Sherlock with Japanese dubbing', 8, 'Looks interesting but it was in Japanese so I did not really catch anything');
	
delete from new_film where id = 2;
-- what happens to the customer_review table is 
-- the value that is a child of the value we just deleted, got deleted too, with it's all affected rows

select new_film.name as film_name, customer_review.score, language.name as language, customer_review.title, customer_review.review_text
from customer_review
inner join new_film
on new_film.id = customer_review.film_id
inner join language
on customer_review.language_id = language.language_id;












