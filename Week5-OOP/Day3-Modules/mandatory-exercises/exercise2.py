class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount

    # Your code starts HERE
    def __str__(self):
        return f'{self.amount} {self.currency}s'

    def __int__(self):
        return int(self.amount)

    def __repr__(self):
        return f'{self.amount} {self.currency}s'

    def __iadd__(self, other):
        if type(other) is int:
            self.amount += other
        elif self.currency != other.currency:
            raise TypeError(f"Cannot add between {self.__class__.__name__} type {self.currency} and {other.currency}")
        else:
            self.amount += other.amount
            return self

    def __add__(self, other):
        if type(other) is int:
            result = Currency(self.currency, self.amount + other)
            return result
        if self.currency != other.currency:
            raise TypeError(f"Cannot add between {self.__class__.__name__} type {self.currency} and {other.currency}")
        result = Currency(self.currency, self.amount + other.amount)
        return result


def main():
    c1 = Currency('Dollar', 5)
    c2 = Currency('Dollar', 10)
    c3 = Currency('Shekel', 1)
    c4 = Currency('Shekel', 10)
    print(str(c1))
    print(int(c1))
    print(repr(c1))
    print((c1 + 5))
    print((c1 + c2))
    c1 += c2
    print(c1)
    print((c1 + c3))


if __name__ == "__main__":
    main()
