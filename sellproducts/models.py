from django.db import models


class Product(models.Model):

    """
    Product
    """

    name = models.CharField(max_length=50)
    description = models.TextField()
    price = models.FloatField()
    image = models.ImageField()

    def __str__(self):
        self.name
