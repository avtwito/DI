-- alter table students
-- add birth_date date;

insert into students (id, first_name, last_name, birth_date)
values 
	(default, 'Marc', 'Benuchou', to_date('02.11.1998', 'DD.MM.YYYY')),
	(default, 'Yoan', 'Cohen', to_date('03.12.2010', 'DD.MM.YYYY')),
	(default, 'Lea', 'Benichou', to_date('27.07.1987', 'DD.MM.YYYY')),
	(default, 'Amelia', 'Dux', to_date('07.04.1996', 'DD.MM.YYYY')),
	(default, 'David', 'Grez', to_date('14.06.2003', 'DD.MM.YYYY')),
	(default, 'Omer', 'Simpson', to_date('03.10.1980', 'DD.MM.YYYY'));
	
insert into students (id, first_name, last_name, birth_date)
values (214217283, 'Avishay', 'Twito', to_date('08.10.2003', 'DD.MM.YYYY'));