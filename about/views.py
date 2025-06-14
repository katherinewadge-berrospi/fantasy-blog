from django.shortcuts import render
from .models import About
from django.contrib import messages
from .forms import CollaborateForm
from django.http import HttpRequest


# Create your views here.
def about_me(request):
    """Renders the About page and handles collaboration requests."""
    if request.method == 'POST':
        collaborate_form = CollaborateForm(request.POST)
        if collaborate_form.is_valid():
            collaborate_form.save()
            messages.success(
                request,
                "Collaboration request received! I will try to respond within 2 working days."
            )
            collaborate_form = CollaborateForm()
    else:
        collaborate_form = CollaborateForm()
    about = About.objects.order_by('-updated_on').first()

    return render(request, 'about/about_me.html', {
        'about': about,
        'collaborate_form': collaborate_form,
    })


def custom_404(request, exception):
    return render(request, "404.html", status=404)


def custom_500(request):
    return render(request, "500.html", status=500)


def trigger_error(request: HttpRequest):
    1 / 0
