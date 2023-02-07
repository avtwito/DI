def main():
    # Exercise 1
    keys = ['Ten', 'Twenty', 'Thirty']
    values = [10, 20, 30]
    print(dict(zip(keys, values)))

    # Exercise 2
    family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
    sum = int()
    for key, value in family.items():
        print(f"{key}: {getTicketPrice(value)}$")
        sum += getTicketPrice(value)
    print(f"total price: {sum}$")

    # Exercise 3
    brand = {
        "user": "Zara",
        "creation_date": 1975,
        "creator_name": "Amancio Ortega Gaona",
        "type_of_clothes": ["men", "women", "children", "home"],
        "international_competitors": ["Gap", "H&M", "Benetton"],
        "number_stores": 7000,
        "major_color": {
            "France": ["blue"],
            "Spain": ["red"],
            "US": ["pink", "green"]
        }
    }
    brand["number_stores"] = 2

    # Print a sentence that explains who Zaras clients are.
    print(
        f"{brand['user']} was created in {brand['creation_date']} by {brand['creator_name']}")
    # Add a key called country_creation with a value of Spain.
    brand["country_creation"] = "Spain"
    # Check if the key international_competitors is in the dictionary. If it is, add the store Desigual.
    if not "international_competitors" in brand.keys():
        brand["international_competitors"] = ["Desigual"]
    # Delete the information about the date of creation.
    del brand["creation_date"]
    # Print the last international competitor.
    print(brand["international_competitors"][-1])
    # Print the major clothes colors in the US.
    print(', '.join(brand["major_color"]["US"]))
    # Print the amount of key value pairs (ie. length of the dictionary).
    print(len(brand))
    # Print the keys of the dictionary.
    print(', '.join(brand.keys()))
    # Create another dictionary called more_on_zara with the following details:
    more_on_zara = {
        "creation_date": 1975,
        "number_stores": 10000
    }
    # Use a method to add the information from the dictionary more_on_zara to the dictionary brand.
    brand |= more_on_zara
    print(brand)
    # Print the value of the key number_stores. What just happened ?
    print(brand["number_stores"])
    # what happened is you overidden the previously chosen value of number_stores property

    # Exercise 4
    users = ["Mickey", "Minnie", "Donald", "Ariel", "Pluto"]

    result_dict = dict()
    for i in range(len(users)):
        result_dict[users[i]] = i
    print(result_dict)

    result_dict = dict()
    for i in range(len(users)):
        result_dict[i] = users[i]
    print(result_dict)

    result_dict = dict()
    for i in range(len(users)):
        result_dict[sorted(users)[i]] = i
    print(result_dict)

    result_dict = dict()
    i_users = [user for user in users if 'i' in user]
    for i in range(len(i_users)):
        result_dict[i_users[i]] = i
    print(result_dict)

    mp_users = [user for user in users if user.lower().startswith('i') or user.lower().startswith('p')]
    result_dict = dict()
    for i in range(len(mp_users)):
        result_dict[mp_users[i]] = i
    print(result_dict)


def getTicketPrice(age: int) -> int:
    if age < 3:
        return 0
    if age < 12:
        return 12
    return 15


if __name__ == "__main__":
    main()
