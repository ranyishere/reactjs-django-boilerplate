from django.shortcuts import render
from django.views import generic


# Create your views here.
class MainView(generic.TemplateView):

    """
    Main View
    """

    template_name = 'main.html'

    def get_context_data(self, **kwargs):
        context = super(MainView, self).get_context_data(**kwargs)
        context.update({
            'base_api_url': self.request.build_absolute_uri('/api')
            })
