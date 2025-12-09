from django.http import JsonResponse

def example_api(request):
    data = {"message": "Hello from Django!"}
    return JsonResponse(data)