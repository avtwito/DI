def main():
    # Challenge 1
    # Ask the user for a number and a length.
    # Create a program that prints a list of multiples of the number until the list length reaches length.
    number: int = int(input("number: "))
    length: int = int(input("length: "))
    print(f"➞  {[i for i in range(number, number*length, number)]}")

    # Challenge 2
    # Write a program that asks a string to the user, and display a new string with any duplicate consecutive letters removed.
    word = input("user's word: ")
    print(f"➞  {challenge2(word)}")
    print(f"➞  {''.join(set([*word]))}")



def challenge2(word: str) -> str:
    t = str()
    for i in word:
        if(i in t):
            pass
        else:
            t=t+i
    return t


if __name__ == "__main__":
    main()