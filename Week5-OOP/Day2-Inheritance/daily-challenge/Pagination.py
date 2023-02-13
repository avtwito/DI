from typing import List


class Pagination:
    indicator: int = 0

    def __init__(self, items: List[str] = [], page_size: int | float = 10):
        self.items = items
        self.page_size = int(page_size)

    def get_visible_items(self) -> List[str]:
        return self.items[self.indicator:self.indicator + self.page_size]

    def prev_page(self):
        self.indicator -= self.page_size
        return self

    def next_page(self):
        self.indicator += self.page_size
        return self

    def first_page(self):
        self.indicator = 0
        return self

    def last_page(self):
        self.indicator = -self.page_size
        return self

    def go_to_page(self, page_num: int | float):
        page_num = len(self.items) / self.page_size if len(self.items) / self.page_size < page_num else page_num
        page_num = 0 if 0 > page_num else page_num
        self.indicator = int(page_num)
        return self


def main():
    alphabet_list = list("abcdefghijklmnopqrstuvwxyz")  # I used list() because .split with empty separator no longer works in python
    p = Pagination(alphabet_list, 4)

    print(p.get_visible_items())


if __name__ == "__main__":
    main()
