from django.urls import path
from rest_framework import routers
from django.conf.urls import include
from .views import UserViewSet, UserProfileViewSet, ProductsViewSet, SuppliersViewSet

router = routers.DefaultRouter()
router.register('users', UserViewSet)
router.register('userProfile', UserProfileViewSet)
router.register('Products', ProductsViewSet)
router.register('Suppliers', SuppliersViewSet)
urlpatterns = [
    path('', include(router.urls)),
]
