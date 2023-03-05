from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('family/<int:family_id>/', views.family),
    path('animal/<int:animal_id>/', views.animal),
]
