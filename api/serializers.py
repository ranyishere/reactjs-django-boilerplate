from django.contrib.auth.models import User, Group
from rest_framework.validators import UniqueValidator
from rest_framework import serializers
from sellproducts.models import Product
from accounts import models as acc_models

class PartSmartProfileSerializer(serializers.ModelSerializer):

    class Meta:
        model = acc_models.PartSmartProfile
        fields = ("pk", "user")


class GroupSerializer(serializers.ModelSerializer):

    class Meta:
        model = Group
        fields = ("pk", "name")


class UserSerializer(serializers.ModelSerializer):

    email = serializers.EmailField(
            required=True,
            validators=[UniqueValidator(queryset=User.objects.all())]
            )

    username = serializers.CharField(
            required=True,
            validators=[UniqueValidator(queryset=User.objects.all())]
            )

    # TODO: Add unique validator for password
    password = serializers.CharField(min_length=8)

    def create(self, validated_data):

        """
        Creates user
        """

        user = User.objects.create_user(
                validated_data['username'],
                validated_data['email'],
                validated_data['password']
                )

        user.first_name = validated_data['first_name']
        user.last_name = validated_data['last_name']

        for group in validated_data['groups']:
            user.groups.add(group)

        user.save()

        return user

    class Meta:
        model = User
        fields = ("pk", "username", "email", "groups",
                  "password", "first_name", "last_name")

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ("pk", "name",
                  "description", "price",
                  "image")
