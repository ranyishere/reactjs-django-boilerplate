from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import viewsets
from api.serializers import UserSerializer, ProductSerializer, GroupSerializer, PartSmartProfileSerializer
from sellproducts.models import Product
from rest_framework.response import Response
from rest_framework import status
from accounts import models as acc_models


class UserViewSet(viewsets.ModelViewSet):

    """
    Allows users to be viewed or edited
    """

    queryset = User.objects.all()
    serializer_class = UserSerializer

class ProfileViewSet(viewsets.ModelViewSet):

    """
    Allows profiles to be viewed or edited
    """

    queryset = acc_models.PartSmartProfile.objects.all()
    serializer_class = PartSmartProfileSerializer


class GroupViewSet(viewsets.ModelViewSet):

    """
    Creates Group to be viewed or edited
    """

    queryset = User.objects.all()
    serializer_class = GroupSerializer

class ProductViewSet(viewsets.ModelViewSet):

    """
    Allows product to be viewed and edited
    """

    queryset = Product.objects.all()
    serializer_class = ProductSerializer

