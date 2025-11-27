INSTALLED_APPS = [
    'rest_framework',
    'movies',     # your app
]
INSTALLED_APPS += ['corsheaders']

MIDDLEWARE.insert(0, 'corsheaders.middleware.CorsMiddleware')

CORS_ALLOW_ALL_ORIGINS = True