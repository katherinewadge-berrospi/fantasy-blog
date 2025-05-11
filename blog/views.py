from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
#def my_blog(request):
#    return HttpResponse("Hello, Blog!")

def my_blog(request):

    if request.method == "POST":
        return HttpResponse("You must have POSTed something")
    else:
        return HttpResponse(request.method)