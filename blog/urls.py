from django.urls import path
from . import views

urlpatterns = [
    path('', views.my_blog, name='blog_index'),
    # add more blog-specific routes here
]
