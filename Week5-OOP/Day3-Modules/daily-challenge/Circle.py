from math import pi as PI
import turtle


class Circle:
    def __init__(self, radius: float | None = None, diameter: float | None = None):
        self.diameter = radius * 2 if diameter is None else diameter
        self.r = diameter / 2 if radius is None else radius

    def __str__(self):
        t = turtle.Turtle()
        t.circle(self.r)
        return "Drawing the circle"

    def __add__(self, other):
        return Circle(self.r + other.r)

    def __iadd__(self, other):
        self.r += other.r
        self.diameter += other.diameter

    def __gt__(self, other):
        return self.r > other.r

    def __lt__(self, other):
        return self.r < other.r

    def __le__(self, other):
        return self.r <= other.r

    def __ge__(self, other):
        return self.r >= other.r

    def __eq__(self, other):
        return self.r == other.r

    def __ne__(self, other):
        return self.r != other.r

    def area(self) -> float:
        return PI * self.r ** 2

    def sort(self, other) -> list:
        return [self, other] if self <= other else [other, self]
