from exercise2 import Dog
import random


class PetDog(Dog):
    def __init__(self, name: str, age: float, weight: float, trained: bool = False):
        super().__init__(name, age, weight)
        self.trained = trained

    def train(self) -> str:
        self.trained = True
        return self.bark()

    @staticmethod
    def play(*dogs) -> str:
        return ", ".join(dogs) + "all play together"

    def do_a_trick(self) -> str:
        if self.trained:
            return f"{self.name} " + random.choice(["does a barrel roll", "stands on his back legs",
                                                   "shakes your hand", "plays dead"])


def main():
    dogo: PetDog = PetDog("Rexi", 7, 65)
    print(dogo.train())
    print(dogo.do_a_trick())


if __name__ == "__main__":
    main()
