# Generated by Django 4.1.4 on 2023-09-26 17:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dissertation', '0009_dissertation_approved_dissertation_guide_feedback_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='dissertation',
            old_name='approved',
            new_name='approved_by_guide',
        ),
        migrations.AddField(
            model_name='dissertation',
            name='approved_by_university',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='dissertation',
            name='guide_feedback',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='dissertation',
            name='university_feedback',
            field=models.TextField(blank=True),
        ),
    ]
