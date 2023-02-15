def main():
    print_results()
    print(print_results.__doc__)


def print_results() -> None:
    """I print the results of abs, int, and input"""
    print(abs)
    print(int)
    print(input)


if __name__ == "__main__":
    main()
