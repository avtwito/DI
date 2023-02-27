-- Write a query to display the names (first_name, last_name) using an alias name “First”, “Last” from the employee table.
select first_name as First, last_name as Last from employees;
-- Write a query to get unique departments ID from the employee table (ie. without duplicates).
select distinct department_id from employees
order by department_id desc;
-- Write a query to get the details of all employees from the employee table, do so in descending order by first name.
select * from employees
order by first_name desc;
-- Write a query to get the names (first_name, last_name), salary and 15% of salary as PF (ie. alias) for all the employees.
select first_name, last_name, salary, salary * 0.15 as PF
from employees;
-- Write a query to get the employee IDs, names (first_name, last_name) and salary in ascending order according to their salary.

-- Write a query to get the total sum of all salaries paid to the employees.

-- Write a query to get the maximum and minimum salaries paid to the employees.

-- Write a query to get the average salary paid to the employees.

-- Write a query to get the number of employees working in the company.

-- Write a query to get all the first names from the employees table in upper case.

-- Write a query to get the first three characters of each first name of all the employees in the employees table.

-- Write a query to get the full names of all the employees in the employees table. You have to include the first name and last name.

-- Write a query to get the first name, last name and the length of the full name of all the employees from the employees table.

-- Write a query to check whether the first_name column of the employees table contains any numbers.

-- Write a query to select the first ten records from a table.


-- 🌟 Restricting And Sorting
-- Write a query to display the first_name, last_name and salary of all employees whose salary is between $10,000 and $15,000.

-- Write a query to display the first_name, last_name and hire date of all employees who were hired in 1987.

-- Write a query to get the all employees whose first_name has both the letters ‘c’ and ‘e’.

-- Write a query to display the last_name, job, and salary of all the employees who don’t work as Programmers or Shipping Clerks, and who don’t receive a salary equal to $4,500, $10,000, or $15,000.

-- Write a query to display the last names of all employees whose last name contains exactly six characters.

-- Write a query to display the last name of all employees who have the letter ‘e’ as the third character in the name.

-- Write a query to display the jobs title appearing in the employees table.

-- Write a query to select all information of employees whose last name is either ‘JONES’ or ‘BLAKE’ or ‘SCOTT’ or ‘KING’ or ‘FORD’.
