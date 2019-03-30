from django.db import models
from django.contrib.auth.models import User
from django.core.mail import send_mail
import datetime as dt


class PartSmartProfile(models.Model):

    """
    Extends User class
    """

    user = models.OneToOneField(User, on_delete=models.CASCADE)
    activation_key = models.TextField()
    key_expires = models.DateTimeField()
    is_active = models.BinaryField()

    def __str__(self):
        return self.user.username

    def handle_email(self):

        """
        Handles Email
        """

        ext_email = "nutrujithu@memeil.top"

        results = send_mail("Account Verification",
                            "Verify your account:",
                            "rany.rin.tith@gmail.com",
                            [ext_email],
                            fail_silently=False)

        print("results: ", results)
