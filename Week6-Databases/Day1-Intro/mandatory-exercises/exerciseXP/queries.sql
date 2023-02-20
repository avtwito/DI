select * from items;

select * from items
where price > 80;

select * from items
where price <= 300;

select * from customers
where last_name = 'Smith';
-- The outcome will be an error because last name Smith doesn't exist
-- okay I was wrong, the outcome was just an empty table

select * from customers
where last_name = 'Jones';

select * from customers
where first_name <> 'Scott';