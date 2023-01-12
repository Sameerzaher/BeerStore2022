from django.contrib import admin
from .models import UserProfile, Products, Suppliers
admin.site.register(UserProfile)
admin.site.register(Products)
admin.site.register(Suppliers)
