from django.shortcuts import render
from django.http import HttpResponse, HttpRequest
from django.shortcuts import render
import json


def read_data():
    with open(r'../../people.json') as f:
        return json.load(f)


# Create your views here.
def index(request: HttpRequest) -> HttpResponse:
    return HttpResponse("Home page")


def people(request: HttpRequest) -> HttpResponse:
    data = read_data()
    people_list = sorted(data, key=lambda x: x["age"])
    context: dict = {'people': people_list}
    return render(request, 'people.html', context)
