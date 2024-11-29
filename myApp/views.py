from django.shortcuts import render

from django.http import HttpResponse

def home(request):
    return HttpResponse("Hello, Django!")



'''
NOTE
Significance: Contains functions that handle requests and return responses (e.g., HTML, JSON).
What to write: Define the views (for rendering templates or serving API data).
python
Copy code
from django.http import JsonResponse
from .models import Item

def get_items(request):
    items = Item.objects.all()
    item_data = [{"name": item.name, "price": item.price} for item in items]
    return JsonResponse(item_data, safe=False)
'''


