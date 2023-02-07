from typing import Dict, List
import re

def main():
    # Ask a user for a word
    user_input = input("input please:->>>")
    # Write a program that creates a dictionary. This dictionary stores the indexes of each letter in a list.
    print(makeLettersList(user_input))
    # Make sure the letters are the keys.
    # Make sure the letters are strings.
    # Make sure the indexes are stored in a list and those lists are values.

    items_purchase = {
        "Water": "$1",
        "Bread": "$3",
        "TV": "$1,000",
        "Fertilizer": "$20"
    }


    wallet = "$10"

    print(isInBudget(items_purchase, wallet))


def makeLettersList(text: str) -> Dict[str, List[int]]:
    result = dict()
    index = 0
    for char in text:
        if char not in result.keys():
            result[char] = [index]
        else:
            result[char].append(index)
        index += 1
    return result

def isInBudget(items_purchase: Dict[str, str], wallet: str) -> List[str] | str:
    affordable_items = [key for key in items_purchase.keys() if int(''.join(re.findall("\d+", items_purchase[key]))) < int(''.join(re.findall("\d+", wallet)))]
    return sorted(affordable_items) if len(affordable_items) > 0 else "Nothing"
if __name__ == "__main__":
    main()
