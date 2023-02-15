from string import punctuation
from typing import List
from collections import Counter
from nltk.corpus import stopwords


class Text:
    def __init__(self, text: str = "A good book would sometimes cost as much as a good house."):
        self.words: List[str] = text.split(' ')
        self.counter: Counter[str] = Counter(self.words)

    def __str__(self):
        return ' '. join(self.words)

    def word_frequency(self, word: str) -> str | None:
        freq: int = self.counter[word]
        return None if freq == 0 else f"There are {freq} occurrences to the word {word}"

    def most_common(self) -> str:
        word = self.counter.most_common(1)[0]
        return f"The most common word is '{word[0]}' with {word[1]} occurrences"

    def unique_words(self) -> List[str]:
        return [word for word, frequency in self.counter.items() if frequency == 1]

    @classmethod
    def from_file(cls, path: str) -> "Text":
        with open(path) as f:
            text = f.read().split('\n')
            return Text(''.join(text))


class TextModification(Text):
    def no_punctuation(self) -> 'TextModification':
        self.words = str(self).translate(str.maketrans('', '', punctuation)).split(' ')
        self.counter = Counter(self.words)
        return self

    def no_stop_words(self) -> 'TextModification':
        stop_words = set(stopwords.words("english"))
        self.words = [word for word in self.words if not word.lower() in stop_words]
        self.counter = Counter(self.words)
        return self

    def no_special_characters(self) -> 'TextModification':
        self.words = [word for word in self.words if word.isalnum()]
        self.counter = Counter(self.words)
        return self


def main():
    text = Text()
    print(text.unique_words())
    text_from_file: Text = Text.from_file('the_stranger.txt')
    print(text_from_file.most_common())
    # I have also done the bonuses but I didn't use them here because it will create a mess in the console


if __name__ == "__main__":
    main()
