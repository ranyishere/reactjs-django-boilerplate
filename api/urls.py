from django.urls import path, include
from rest_framework import routers
from api import views


router = routers.DefaultRouter()
router.register('users', views.UserViewSet)
router.register('products', views.ProductViewSet)

urlpatterns = [
        path('', include(router.urls)),
        path('api-auth/', include('rest_framework.urls',
                                  namespace='rest_framework'))
        ]
