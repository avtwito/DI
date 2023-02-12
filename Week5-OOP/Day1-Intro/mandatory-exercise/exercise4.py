from typing import List, Dict
from itertools import groupby


class Zoo:
    def __init__(self, zoo_name: str):
        self.zoo_name = zoo_name
        self.animals: List[str] = []

    def add_animal(self, new_animal: str) -> None:
        if new_animal not in self.animals:
            self.animals.append(new_animal)

    def get_animals(self) -> None:
        for animal in self.animals:
            print(animal, end='\t')

    def sell_animal(self, animal_sold: str) -> None:
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)
        else:
            raise Exception("Animal not in the list")

    def sort_animals(self) -> Dict[str, List[str]]:
        self.animals.sort()
        return {key: list(group) for key, group in groupby(self.animals, lambda x: x[0])}

    def get_groups(self) -> None:
        for key, group in self.sort_animals():
            print(key + ": " + group)


def main():
    ramat_gan_safari: Zoo = Zoo("Ramat Gan Safari")
    while True:
        user_command = input("Enter command: add/get/sell/sort/quit")
        match user_command:
            case "quit":
                break
            case "add":
                ramat_gan_safari.add_animal(input("Animal to add:\t"))
            case "get":
                ramat_gan_safari.get_animals()
            case "sell":
                ramat_gan_safari.sell_animal(input("Animal to sell:\t"))
            case "sort":
                ramat_gan_safari.get_groups()
            case _:
                raise Exception("Command not found!")


if __name__ == "__main__":
    main()
