from django.shortcuts import render
from django.http import HttpResponse, HttpRequest
import json


# Create your views here.
def index(request: HttpRequest) -> HttpResponse:
    return HttpResponse("Hello world yeah yeah whatever")


def family(request: HttpRequest, family_id: int) -> HttpResponse:
    with open(r'C:\Users\00002\OneDrive - g.jct.ac.il\Documents\DI-Bootcamp\Week8-Django\Day1-Intro\animals.json') as f:
        animals = json.load(f)
    return HttpResponse([animal["name"] for animal in animals["animals"] if animal["family"] == family_id])


def animal(request: HttpRequest, animal_id: int) -> HttpResponse:
    with open(r'C:\Users\00002\OneDrive - g.jct.ac.il\Documents\DI-Bootcamp\Week8-Django\Day1-Intro\animals.json') as f:
        animals = json.load(f)
    return HttpResponse([animal for animal in animals["animals"] if animal["family"] == animal_id])
