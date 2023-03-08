from django.shortcuts import render
from django.http import HttpResponse, HttpRequest
import json


# Create your views here.
def index(request: HttpRequest) -> HttpResponse:
    return HttpResponse("Hello world yeah yeah whatever")


def read_date():
    with open(r'C:\Users\00002\OneDrive - g.jct.ac.il\Documents\DI-Bootcamp\Week8-Django\Day1-Intro\animals.json') as f:
        data = json.load(f)
    return data


def family(request: HttpRequest, family_id: int) -> HttpResponse:
    animals = read_date()
    return HttpResponse([curr_animal["name"] for curr_animal in animals["animals"] if curr_animal["family"] == family_id])


def animal(request: HttpRequest, animal_id: int) -> HttpResponse:
    animals = read_date()
    return HttpResponse([curr_animal for curr_animal in animals["animals"] if curr_animal["family"] == animal_id])


def animal_render(request: HttpRequest, animal_id: int) -> HttpResponse:
    data = read_date()
    context = {'animals': curr_animal for curr_animal in data['animals'] if curr_animal['id'] == animal_id}
    return render(request, 'animal.html', context)
