from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
]





'''
NOTE
Significance: This file handles routing for your app. Define the URLs that your app responds to.
What to write: Link the views to specific URLs.
python
Copy code
from django.urls import path
from . import views

urlpatterns = [
    path('items/', views.get_items, name='get_items'),
]
'''