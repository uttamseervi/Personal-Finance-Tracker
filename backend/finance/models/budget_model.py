from django.db import models
from django.utils import timezone
from .user_model import User

class Budget(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    category = models.CharField(max_length=100)
    budget_amount = models.DecimalField(max_digits=10, decimal_places=2)
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()
    amount_spent = models.DecimalField(max_digits=10, decimal_places=2, default=0)

    def __str__(self):
        return f"Budget for {self.category} ({self.budget_amount}) from {self.start_date} to {self.end_date}"
