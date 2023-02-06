import random

def main():
    # # Exercise 1
    # myFavNumbers = set()
    # # add my fav numbers
    # for i in range(1, 53, 8):
    #     myFavNumbers.add(i)
    # print(myFavNumbers)
    # myFavNumbers.pop()
    # friendFavNumbers = set()
    # print(myFavNumbers)
    # for i in range(1, 56, 7):
    #     friendFavNumbers.add(i)
    # setsUnion = myFavNumbers.union(friendFavNumbers)
    # print(setsUnion)

    # # Exercise 2
    # # Answer: No, because tuples are immutable

    # # Exercise 3
    # basket = ["Banana", "Apples", "Oranges", "Blueberries"]
    # basket.remove("Banana")
    # basket.pop()
    # basket.append("Kiwi")
    # basket.insert(0, "Apples")
    # print(basket.count("Apples"))
    # print(basket)
    # basket.clear()
    # print(basket)

    # # Exercise 4
    # # float is a not whole number, a number with a floating point (R).
    # # integer is only whole numbers (Z)
    # # one way for example to generate a sequence of floats will be
    # # to take a float rood and power it a few times. or duplicating with another float.
    
    # # modded range function
    # def aRange(start, stop, step):
    #     output = list()
    #     while (start < stop):
    #         output.append(start)
    #         start += step
    #     return output

    # newlist = aRange(1, 5, 0.5)
    # print(newlist)

    # # Exercise 5
    # for i in range(1, 21):
    #     print(i)

    # for i in range(1, 21):
    #     print(i if i % 2 else '\n')

    # # Exercise 6
    # user_input = str()
    # while user_input != "Avishay":
    #     user_input = input("Please enter your name: ")

    # # Exercise 7
    # user_input = input("Please type-in your favorite fruits separated by a single space:\t")
    # fruits = user_input.split()
    # user_input = input("Now type-in a name of any fruit:\t")
    # if user_input in fruits:
    #     print("You have chosen one of your favorite fruits, enjoy!")
    # else:
    #     print("You chose a new fruit, I hope you enjoy.")
    
    # # Exercise 8
    # for i in aRange(10, 22.5, 2.5):
    #     user_input = input("Enter a pizza topping. To finish enter 'quit'.\n")
    #     if user_input == 'quit':
    #         print(f'total price: {i}')
    #         break
    
    # # Exercise 9
    # print("Tickets overall price: {}\n".format(calculateTicketPrice(input("Please enter ages separated by whitespace:\t").split())))
    # print(askTeenAge(input("Please enter kid's names seperated by whitespace: ").split()))

    # Exercise 10
    sandwich_orders = ["Tuna sandwich", "Avocado sandwich", "Egg sandwich", "Sabih sandwich", "Pastrami sandwich"]
    random.shuffle(sandwich_orders)
    ready_list = list()
    for i in range(len(sandwich_orders)):
        sandwichReady(sandwich_orders, ready_list)
    print(f"Ready: {ready_list}")
    print(f"Waiting: {sandwich_orders}")

    # Exercise 11
    sandwich_orders += ready_list
    out_of_stock_sandwich = "Pastrami sandwich"
    if sandwich_orders.count(out_of_stock_sandwich) >= 3:
        outOfStock(out_of_stock_sandwich)


# ======================= Functions I used for this exercise are defined here ==============================

def outOfStock(sandwiches: list, sandwich: str) -> None:
    print(f"Sorry, we ran out of {sandwich}")
    while sandwiches.count(sandwich):
        sandwiches.remove(sandwich)

def sandwichReady(orders: list, ready: list) -> None:
    ready.append(orders.pop(0))
    print(f"I made your {ready[-1]}")

def askTeenAge(names: list) -> None:
    try:
        for name in names:
            if int(input(f"{name}: age >> ")) < 21:
                print("You're still a minor, you can't watch the movie. try again at 21!")
                names.remove(name)
    except Exception as e:
        print(e)

def calculateTicketPrice(ages: list) -> int:
    if not ages:
        # list is empty - end recursion
        return 0
    try:
        age = int(ages.pop())
    except Exception as e:
        print(e)
    if age < 3:
        return calculateTicketPrice(ages)
    if age < 12:
        return calculateTicketPrice(ages) + 10
    return calculateTicketPrice(ages) + 15

if __name__ == "__main__":
    main()