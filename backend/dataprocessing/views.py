
from django.shortcuts import render, HttpResponse, redirect
from .forms import userinput
from apiclient.discovery import build
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse
from django.http import JsonResponse, HttpResponseRedirect
from .models import channel
import pickle
from .app_logic import logic
from django.db.models import Q
from django.template import loader
import json
from django.core import serializers
global qouta
qouta = 0
global js
js = 1
YOUTUBE_API_SERVICE_NAME = "youtube"
YOUTUBE_API_VERSION = "v3"


with open("Indian_city_location.txt", "rb") as fp:
    city_list_location = pickle.load(fp)
with open("qouta.txt", "rb") as fp:  # importing current Qouta value
    qouta = pickle.load(fp)


@csrf_exempt
def home_view(request):
    context = {}
    # create object of form
    form = userinput(request.POST or None, request.FILES or None)
    try:
        print(request.body)
        data = json.loads(request.body.decode('utf8'))
    except:
        pass
    # check if form data is valid
    try:
        if data:
            query = data['query']
            city = data['city']
            city = eval(city)
            max_results = data['number_queries']
            print(query, city, max_results)
            query = str(query)
            querydata = [query]
            locationdata = city  # should be [['cityname' , 'lat' , lon]]
            loc_value = locationdata[0][0]
            qouta = logic(querydata, locationdata, max_results)
            print(qouta)
            params = {
                'query': query,
                'city': loc_value,
                'max_results': max_results,
            }
            filtereddata = channel.objects.filter(
                Q(Channel_query=params['query']) & Q(Channel_city=params['city']))
            context = {'filtereddata': filtereddata,
                       'qouta': qouta,
                       'query': query,
                       'city': loc_value,
                       }
            context['Remaining_qouta'] = 490000 - qouta
            context['records'] = len(filtereddata)
            data = list(filtereddata.values())
            jsons = json.dumps(data)
            print(jsons)
            return JsonResponse(data, safe=False)

    except:
        with open("qouta.txt", "rb") as fp:  # importing current Qouta value
            qouta = pickle.load(fp)
        context['form'] = form
        context['qouta'] = qouta
        context['Remaining_qouta'] = 490000 - qouta
        data = channel.objects.all()
        context['records'] = len(data)

        return render(request, "index.html", context)


def table(request):
    context = {}
    context['qouta'] = qouta
    context['Remaining_qouta'] = 490000 - qouta
    data = channel.objects.all()
    context['data'] = data
    context['records'] = len(data)
    return render(request, 'database.html', context)


def subtable(request, context):
    query = request.GET.get('query')
    city = request.GET.get('city')
    locationdata = [city_list_location[city]]
    loc_value = locationdata[0][0]
    params = {
        'query': query,
        'city': loc_value,
    }
    filtereddata = channel.objects.filter(
        Q(Channel_query=params['query']) & Q(Channel_city=params['city']))
    context = {'filtereddata': filtereddata,
               }
    context['Remaining_qouta'] = 490000 - qouta
    return render(request, 'list.html', context)
