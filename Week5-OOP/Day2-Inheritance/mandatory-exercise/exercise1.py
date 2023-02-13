from typing import List


class Pets:
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())


class Cat:
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'


class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'


class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'


class Siamese(Cat):
    pass


def main():
    all_cats: List[Cat] = [Bengal("Scar", 6), Chartreux("Silly", 4), Siamese("Lady", 1)]
    sara_pets: Pets = Pets(all_cats)
    sara_pets.walk()


if __name__ == "__main__":
    main()
