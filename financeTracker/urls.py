"""financeTracker URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('/api', include('myApp.urls')),
]

'''
NOTES: 
Significance: This is where you define the URL routing for your entire project.
What to write: Define the main URLs for your Django app (e.g., admin panel, APIs).
asgi.py and wsgi.py:

Significance: These files are used for setting up Django's ASGI and WSGI interfaces, respectively. You don't need to modify them in most cases.
'''