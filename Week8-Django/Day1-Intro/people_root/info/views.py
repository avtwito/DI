from django.shortcuts import render
from django.http import HttpResponse, HttpRequest
from django.shortcuts import render
import json


def read_data():
    with open(r'C:\Users\00002\OneDrive - g.jct.ac.il\Documents\DI-Bootcamp\Week8-Django\Day1-Intro\people.json') as f:
        data = json.load(f)
    return data["people"]


# Create your views here.
def index(request: HttpRequest) -> HttpResponse:
    return HttpResponse("Home page")


def people(request: HttpRequest) -> HttpResponse:
    data = read_data()
    people_list = sorted(data, key=lambda x: x["age"])
    context: dict = {'people': people_list}
    return render(request, 'people.html', context)
