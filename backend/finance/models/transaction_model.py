from django.db import models
from django.utils import timezone
from .user_model import User  

class Transaction(models.Model):
    id = models.AutoField(primary_key=True, unique=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)  # User who made the transaction
    transaction_id = models.CharField(max_length=255, unique=True)  # Unique identifier for the transaction (from Plaid)
    date = models.DateTimeField(default=timezone.now)  # Date of the transaction
    amount = models.DecimalField(max_digits=10, decimal_places=2)  # Amount spent
    name = models.CharField(max_length=255)  # Name of the merchant/vendor
    category = models.CharField(max_length=255)  # Category of the transaction (e.g., "Food", "Shopping")
    location = models.JSONField(null=True, blank=True)  # Location information (optional)
    payment_channel = models.CharField(max_length=50)  # Payment method (e.g., "online", "in-store")
    iso_currency_code = models.CharField(max_length=3)  # Currency code (e.g., USD)

    def __str__(self):
        return f"{self.name} - {self.amount} ({self.date})"
