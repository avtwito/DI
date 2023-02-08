import random
from typing import List

# Exercise 1
def display_message() -> None:
    return "Hey I'm studying fullstack web programming"

print(display_message())

# Exercise 2
def favorite_book(book: str):
    return f"My favorite book is {book}"

print(favorite_book("Alice in Wonderland"))

# Exercise 3
def describe_city(city: str = "Reykjavik", country: str = "Iceland") -> str:
    return f"{city} is in {country}"

print(describe_city())
print(describe_city("Beirut", "Lebanon"))

# Exercise 4
def compareRandom(input: int) -> bool:
    num = random.randint(1, 100)
    return True if input == num else False

output: str = "SUCCESS" if compareRandom(int(input("Please type-in a number between 1 and 100: "))) else "FAIL"
print(output)

# Exercise 5
def make_shirt(size: str = "L", text: str = "I love python") -> str:
    return f"The size of the shirt is {size} and the text is {text}"

size: str = input("Size>> ")
text: str = input("text>> ")

print(make_shirt(size, text))

print(make_shirt())

print(make_shirt("M"))

print(make_shirt("S", "Typescript is better than JavaScript"))

print(make_shirt(text="Don't mess with me I'm a big boy now and I'm very scary", size="XS"))

# Exercise 6
magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

def show_magicians(magicians: List[str]) -> None:
    print(', '.join(magicians))

def make_great(magicians: List[str]) -> None:
    for i in range(len(magicians)):
        magicians[i] += ' the Great'

make_great(magician_names)
show_magicians(magician_names)

# Exercsie 7
def get_random_temp(season: str) -> float:
    if season == "winter":
        return random.uniform(-10, 8)
    elif season == "fall":
        return random.uniform(8, 18)
    elif season == "spring":
        return random.uniform(18, 26)
    elif season == "summer":
        return random.uniform(26, 40)
    else:
        return random.uniform(-10, 40)

def main():
    temp: float = get_random_temp(input("Please type-in a season"))
    print(f"The temperature right now is {temp} degrees Celsius")
    if temp < 0:
        print("Brrr, that's freezing! Wear some extra layers today")
    elif temp < 16:
        print("Quite chilly! Don't forget your coat")
    elif temp < 23:
        print("Weather is convinient, go for a nice walk")
    elif temp < 32:
        print("Go to the nature!")
    else:
        print("It's hot! Go to the beach.")

