from typing import List


class Cat:
    def __init__(self, cat_name: str, cat_age: float):
        self.name = cat_name
        self.age = cat_age

    def __str__(self):
        return f"{self.name}.\n{self.name}'s age: {self.age}."


def main() -> None:
    cat1: Cat = Cat("Lady", 0.9)
    cat2: Cat = Cat("Scar", 6)
    cat3: Cat = Cat("Phillip", 5)

    print("The oldest cat is:", end=" ")
    print(find_oldest([cat1, cat2, cat3]))


def find_oldest(cats: List[Cat]) -> Cat:
    oldest_cat: Cat = cats[0]
    for cat in cats:
        if oldest_cat.age < cat.age:
            oldest_cat = cat
    return oldest_cat


if __name__ == "__main__":
    main()
