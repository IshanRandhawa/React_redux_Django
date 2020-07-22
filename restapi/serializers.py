from rest_framework import serializers
from dataprocessing.models import channel

class channelSerializer(serializers.ModelSerializer):
    class Meta:
        model = channel
        fields ='__all__'
