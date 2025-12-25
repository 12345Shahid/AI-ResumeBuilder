from rest_framework import serializers
from .models import ResumeJibon, ChakriBakri, PortfolioDujon

class ResumeJibonSerializer(serializers.ModelSerializer):
    class Meta:
        model = ResumeJibon
        fields = '__all__'

class ChakriBakriSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChakriBakri
        fields = '__all__'

class PortfolioDujonSerializer(serializers.ModelSerializer):
    class Meta:
        model = PortfolioDujon
        fields = '__all__'
