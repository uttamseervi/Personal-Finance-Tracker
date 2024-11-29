from django.db import models

# Create your models here.








'''
NOTE
Significance: This file contains your database models, which define the structure of your database tables.
What to write: Define the models (database schema) for your app

from django.db import models

class Item(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    
    def __str__(self):
        return self.name

'''