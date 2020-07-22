from rest_framework import viewsets, permissions
from .serializers import channelSerializer
from dataprocessing.models import channel


class LeadViewSet(viewsets.ModelViewSet):
    queryset = channel.objects.all()
    serializer_class = channelSerializer
