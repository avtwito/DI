from typing import List
from random import Random
words = ''


def main():
    global words
    words = get_words_from_file(r'sowpods.txt')
    length = input("How long do you want the sentence to be?\n>>> ")
    if check_validity(length):
        print(get_random_sentence(int(length)))
    else:
        raise ValueError("Input must be between 2 to 20")


def get_words_from_file(file_path: str) -> List[str]:
    with open(file_path) as f:
        return [line[:-1].lower() for line in f]


def get_random_sentence(length: int) -> str:
    """This method creates a random sentence in a length of parameter length"""
    r = Random()
    return ' '.join(r.sample(words, length))


def check_validity(length: str) -> bool:
    return True if length.isdigit() and 20 >= int(length) >= 2 else False


if __name__ == "__main__":
    main()
