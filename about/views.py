from django.shortcuts import render
from .models import About
from django.contrib import messages
from .forms import CollaborateForm
from django.http import HttpRequest


# Create your views here.
def about_me(request):
    """Renders the About page."""
    if request.method == 'POST':
        form = CollaborateForm(data=request.POST)
        if form.is_valid():
            form.save()
            messages.add_message(
                request,
                messages.SUCCESS,
                (
                    'Collaboration request received! '
                    'I will try to respond within 2 working days.'
                ),
            )

    about = (
        About.objects.all()
        .order_by('-updated_on')
        .first()
    )
    form = CollaborateForm()

    return render(
        request,
        'about/about_me.html',
        {
            'about': about,
            'collaborate_form': form,
        },
    )


def custom_404(request, exception):
    return render(request, "404.html", status=404)


def custom_500(request):
    return render(request, "500.html", status=500)


def trigger_error(request: HttpRequest):
    1 / 0
