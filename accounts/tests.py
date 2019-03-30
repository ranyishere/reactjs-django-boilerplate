import datetime as dt
import logging

from django.test import TestCase
from accounts import models as acc_models
from django.contrib.auth.models import User

logger = logging.getLogger(__name__)
logger.setLevel(logging.DEBUG)
logging.basicConfig(format="%(asctime)s - %(module)s %(lineno)d : %(message)s")

# Create your tests here.
class AccountTest(TestCase):

    """
    Tests account apis
    """

    def setUp(self):

        """
        Sets up data
        """

        self.email = "rany@gmail.com"
        self.username = "ranyishere"
        self.password= "password"
        self.first_name = "rany"
        self.last_name = "tith"

        self.user = User.objects.create_user(email=self.email,
                                             username=self.username,
                                             password=self.password)

        date = dt.datetime.now() + dt.timedelta(days=2)
        strdate = dt.datetime.strftime(date, "%Y-%m-%d %H:%M:%S")

        self.ps_user = acc_models.PartSmartProfile.objects.create(
                       user=self.user,
                       key_expires=strdate
                       )

        self.group_name = "vendor"


    def test_user_email(self):

        """
        Test the emailing of a user
        """

        self.ps_user.handle_email()
