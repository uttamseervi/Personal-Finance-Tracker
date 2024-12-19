from django.contrib import admin
from .models import Budget,User,Transaction
# Register your models here.
admin.site.register(Budget)
admin.site.register(User)
admin.site.register(Transaction)