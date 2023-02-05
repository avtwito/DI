import random

def main():
    user_input = input("Please type-in a string: ")
    if len(user_input) > 10:
        print("string is too long")
    elif len(user_input) < 10:
        print('string not long enough')
    else:
        print(user_input[::9])
        text = str()
        for c in user_input:
            text += c
            print(text)
        # bonus
        print(''.join(random.sample(tuple(user_input), len(user_input))))


if __name__ == "__main__":
    main()