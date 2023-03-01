import psycopg2
import gc
from typing import List


HOSTNAME = 'localhost'
USERNAME = 'postgres'
PASSWORD = '3811'
DATABASE = 'restaurant'


class MenuItem:
    def __init__(self, name: str, price: float):
        self.name = name
        self.price = price

    def save(self) -> None:
        try:
            connection = psycopg2.connect(host=HOSTNAME, user=USERNAME, password=PASSWORD, dbname=DATABASE)
            cursor = connection.cursor()
            query: str = f"""INSERT INTO menu (name, price)
                             VALUES ({self.name}, {self.price});"""
            cursor.execute(query)
            connection.close()
        except Exception as e:
            print(e)

    def delete(self) -> None:
        try:
            connection = psycopg2.connect(host=HOSTNAME, user=USERNAME, password=PASSWORD, dbname=DATABASE)
            cursor = connection.cursor()
            query: str = f"""DELETE FROM menu
                             WHERE name = {self.name};"""
            cursor.execute(query)
            connection.close()
        except Exception as e:
            print(e)

    def update(self, name: str, price: float) -> None:
        try:
            self.name = name
            self.price = price
        except Exception as e:
            print(e)

    @classmethod
    def all(cls) -> List['MenuItem']:
        return [item for item in gc.get_objects() if isinstance(item, MenuItem)]

    @staticmethod
    def get_by_name(name: str) -> 'MenuItem' | None:
        for item in MenuItem.all():
            if name in item.name:
                return item
        return None
