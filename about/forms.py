from .models import CollaborateRequest
from django import forms


class CollaborateForm(forms.ModelForm):
    name = forms.CharField(required=False) 
    class Meta:
        model = CollaborateRequest
        fields = ('name', 'email', 'message')
