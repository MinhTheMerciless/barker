# Generated by Django 3.1.7 on 2021-03-25 19:04

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('twitter_clone_backend', '0008_tweet_explanation'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tweet',
            name='explanation',
            field=models.ForeignKey(blank=True, default='default', null=True, on_delete=django.db.models.deletion.CASCADE, to='twitter_clone_backend.explanation'),
        ),
        migrations.AlterField(
            model_name='tweet',
            name='text',
            field=models.TextField(default='', max_length=141),
        ),
    ]