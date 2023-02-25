-- Use UPDATE to change the language of some films. Make sure that you use valid languages.

/* update customer_review
set language_id = 1
where language_id <> 1; */

-- Which foreign keys (references) are defined for the customer table? How does this affect the way in which we INSERT into the customer table?

/* The foreign keys that are defined for the customer table are address_id.
The affect is, when we want to insert a new customer into the customer table,
We have to first find the corresponfing address_id in the address table. */

-- We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?

-- drop table customer_review;
/* No special action needed when dropping table customer_review */

-- Find out how many rentals are still outstanding (ie. have not been returned to the store yet).
select count(rental_id) from rental
where return_date > date '2005-08-25';

-- Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)
select rental.return_date, rental.rental_id, film.title, film.rental_rate || '$' as rental_price
from rental
inner join inventory
on rental.inventory_id = inventory.inventory_id
inner join film
on inventory.film_id = film.film_id
where return_date > date '2005-08-25'
order by film.rental_rate desc limit 30;

-- Your friend is at the store, and decides to rent a movie. He knows he wants to see 4 movies, but he can’t remember their names. Can you help him find which movies he wants to rent?
-- The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.
select title, description, rental_rate, rating
from film
inner join film_actor
on film.film_id = film_actor.film_id
inner join actor
on film_actor.actor_id = actor.actor_id
where actor.first_name = 'Penelope'
and actor.last_name = 'Monroe'
and film.description ilike '%sumo wrestler%';

-- The 2nd film : A short documentary (less than 1 hour long), rated “R”.
select title, description, rental_rate, length, rating, special_features
from film
where description ilike '%documentary%' and length < 60 and rating = 'R';

-- The 3rd film : A film that his friend Matthew Mahan rented. He paid over $4.00 for the rental, and he returned it between the 28th of July and the 1st of August, 2005.
select title, description, rental_rate, length, rating, special_features, customer.customer_id
from film
inner join inventory
on film.film_id = inventory.film_id
inner join rental
on inventory.inventory_id = rental.inventory_id
inner join customer
on rental.customer_id = customer.customer_id
where customer.first_name ilike 'matthew'
and customer.last_name ilike 'mahan'
and film.rental_rate > 4
and rental.return_date > date '2005-07-28'
and rental.return_date < date '2005-08-01';

/* Now I know Matthew Mahan's customer id is 323,
and I'll use it to make my life easier in the next exercise. */

-- The 4th film : His friend Matthew Mahan watched this film, as well. It had the word “boat” in the title or description, and it looked like it was a very expensive DVD to replace.
select title, description, rental_rate, length, rating, replacement_cost
from film
inner join inventory
on film.film_id = inventory.film_id
inner join rental
on inventory.inventory_id = rental.inventory_id
where rental.customer_id = 323 /* Matthew Mahan's customer_id */
and (film.description ilike '%boat%' or film.title ilike '%boat%')
order by replacement_cost desc
fetch first row only;






-- select new_film.name as film_name, customer_review.score, language.name as language, customer_review.title, customer_review.review_text
-- from customer_review
-- inner join new_film
-- on new_film.id = customer_review.film_id
-- inner join language
-- on customer_review.language_id = language.language_id;