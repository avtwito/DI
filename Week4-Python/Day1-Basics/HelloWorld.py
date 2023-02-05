def main():
    print("Hello world\n" * 4)
    print((99^3)*8)
    # Exercise 3
    # false
    # true
    # false
    # Error
    # false
    computer_brand = "Dell"
    print('I have a {} computer'.format(computer_brand))
    name = "Avisahy"
    age = 19
    shoe_size = 44
    print('My name is {}, I\'m {} years old and my shoe size is {}.'.format(name, age, shoe_size))
    a = 17
    b = 19
    if (a > b):
        print ("Hello World")
    # Exercise 8
    print("Odd" if int(input("please type in a number: ")) % 2 else "Even")
    print("You're tall enough." if int(input("Please type in your height: ")) > 145 else "You need to grow some more!")



if __name__ == "__main__":
    main()
