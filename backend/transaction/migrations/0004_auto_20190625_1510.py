# Generated by Django 2.2.2 on 2019-06-25 13:10

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('transaction', '0003_auto_20190625_1045'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='transaction',
            options={'ordering': ['date']},
        ),
    ]