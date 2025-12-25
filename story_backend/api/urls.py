from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ResumeJibonViewSet, ChakriBakriViewSet, PortfolioDujonViewSet

router = DefaultRouter()
router.register(r'resume-jibon', ResumeJibonViewSet)
router.register(r'chakri-bakri', ChakriBakriViewSet)
router.register(r'portfolio-dujon', PortfolioDujonViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
