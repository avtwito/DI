class Dog:
    def __init__(self, name: str, height: int):
        self.name = name
        self.height = height

    def bark(self) -> None:
        print("%s goes WOOF!" % self.name)

    def jump(self) -> None:
        print("%s jumps %dcm high!" % (self.name, self.height * 2))

    def __str__(self):
        return "Dog's name: {}. Dog's height: {}".format(self.name, self.height)


def main():
    davids_dog: Dog = Dog("Rex", 50)
    print(davids_dog)
    davids_dog.bark()
    davids_dog.jump()

    sarahs_dog: Dog = Dog("Teacup", 20)
    print(sarahs_dog)
    sarahs_dog.bark()
    sarahs_dog.jump()
    print(davids_dog.name if davids_dog.height > sarahs_dog.height else sarahs_dog.height)


if __name__ == "__main__":
    main()
