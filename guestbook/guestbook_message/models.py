# guestbook_message/models.py
from django.db import models


class GuestbookEntry(models.Model):
    name = models.CharField(max_length=100)
    message = models.TextField()
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name}: {self.message[:50]}..."
