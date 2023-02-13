class Dog:
    def __init__(self, name: str, age: float, weight: float):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self) -> str:
        return f"{self.name} is barking"

    def run_speed(self) -> float:
        return self.weight / self.age * 10

    def fight(self, other_dog) -> str:
        winner: Dog = self if self.run_speed() * self.weight > other_dog.run_speed() * other_dog.weight else other_dog
        return f"{winner.name} won the fight!"


def main():
    dog1: Dog = Dog("Rexi", 6, 85)
    dog2: Dog = Dog("Piper", 8, 65)
    dog3: Dog = Dog("Mikel", 5, 93)
    print(dog1.fight(dog2))
    print(dog3.bark())


if __name__ == "__main__":
    main()
