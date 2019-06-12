"""
WSGI config for hwnzy_net project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/1.11/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application

profiles = os.environ.get('PROJECT_PROFILE', 'develop')
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "hwnzy_net.settings.%s" % profiles)

application = get_wsgi_application()