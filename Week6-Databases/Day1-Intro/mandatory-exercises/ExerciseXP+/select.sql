select * from students;
select first_name, last_name from students;

select first_name, last_name from students
where id=2;

select first_name, last_name from students
where last_name='Benichou'
and first_name='Mark';

select first_name, last_name from students
where last_name='Benichou'
or first_name='Marc';

select first_name, last_name from students
where first_name like '%a%';

select first_name, last_name from students
where first_name like 'a%';

select first_name, last_name from students
where first_name like '%a';

select first_name, last_name from students
where first_name like '%a_';

select first_name, last_name from students
where id=1 and id=3;

select * from students
where birth_date >= '01-01-2000'::date;