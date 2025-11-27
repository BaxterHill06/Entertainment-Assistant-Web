from django.urls import JsonResponse

def test(request):
    return JsonResponse({"message": "API is working!"})