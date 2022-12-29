from django.db import models
from django.contrib.auth.models import User
TYPE_CHOICES = (("1", "Store manager"),
                ("2", "Store Employee"), ("3", "Store Admin"),)


class UserProfile(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    username = models.CharField(max_length=32)
    firstName = models.CharField(max_length=32)
    lastName = models.CharField(max_length=32)
    email = models.CharField(max_length=200)
    userType = models.CharField(
        max_length=20,
        choices=TYPE_CHOICES,
        default='1'
    )

    def __str__(self):
        return self.user.username
