import psycopg2

HOSTNAME = 'localhost'
USERNAME = 'postgres'
PASSWORD = '3811'
DATABASE = 'dvdrental'

connection = psycopg2.connect(host=HOSTNAME, user=USERNAME, password=PASSWORD, dbname=DATABASE)

cursor = connection.cursor()

query: str = "SELECT * FROM customer LIMIT 20"

cursor.execute(query)

results = cursor.fetchall()

for item in results:
    print(item)

connection.close()
