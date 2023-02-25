from logging import exception
from enum import Enum


class Game:
    class Move(Enum):
        ROCK = 1
        PAPER = 2
        SCISSORS = 3

    @staticmethod
    def get_user_item() -> Enum:
        moves = Enum('Move', ['ROCK', 'PAPER', 'SCISSORS'])
        user_input = input("Please enter your move: For Rock enter 1, paper is 2, scissors are 3.\t>>")
        try:
            for ele in moves:
                if ele.value == int(user_input):
                    return ele
        except ValueError:
            print("I don't understand what move do you want")
        except Exception as e:
            print("I don't understand what move do you want")
            exception(e)
        ele = Game.get_user_item()
        return ele
