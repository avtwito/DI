from typing import List


class Farm:
    def __init__(self, name: str):
        self.name = name
        self.animals = {}

    def add_animal(self, animal: str, count: int = 1) -> None:
        if animal in self.animals:
            self.animals[animal] += count
        else:
            self.animals[animal] = count

    def get_info(self) -> str:
        output: str = f"{self.name}'s farm\n\n"
        for animal, count in self.animals.items():
            output += f"{animal} : {count}\n"
        output += "\n\n\tE-I-E-I-0!"
        return output

    def get_animal_types(self) -> List[str]:
        return [animal for animal in self.animals.keys()]

    def get_short_info(self):
        return f"{self.name}'s farm has " + ", ".join(self.get_animal_types())
