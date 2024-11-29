from django.test import TestCase

# Create your tests here.


'''
NOTE
Significance: Contains functions that handle requests and return responses (e.g., HTML, JSON).
What to write: Define the views (for rendering templates or serving API data).

from django.http import JsonResponse
from .models import Item

def get_items(request):
    items = Item.objects.all()
    item_data = [{"name": item.name, "price": item.price} for item in items]
    return JsonResponse(item_data, safe=False)

'''