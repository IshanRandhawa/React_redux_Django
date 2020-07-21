from rest_framework import routers
from .views import LeadViewSet


router = routers.DefaultRouter()
router.register("api", LeadViewSet, "channels")

urlpatterns = router.urls
