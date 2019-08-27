# Generated by Django 2.2.4 on 2019-08-27 17:17

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('transaction', '0008_transaction_recurring_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='recurringtransaction',
            name='company',
            field=models.ForeignKey(help_text='The company that has this recurring transaction', on_delete=django.db.models.deletion.CASCADE, related_name='recurring_transactions', to='company.Company'),
        ),
        migrations.AlterField(
            model_name='recurringtransaction',
            name='end_date',
            field=models.DateField(help_text="The last day there can be an occurence. Doesn't have to be the date of an occurence"),
        ),
        migrations.AlterField(
            model_name='recurringtransaction',
            name='interval',
            field=models.PositiveIntegerField(help_text='The interval between each occurrence'),
        ),
        migrations.AlterField(
            model_name='recurringtransaction',
            name='interval_type',
            field=models.CharField(choices=[('DA', 'day'), ('MO', 'month')], help_text='The value which the interval should operate on', max_length=2),
        ),
        migrations.AlterField(
            model_name='recurringtransaction',
            name='start_date',
            field=models.DateField(help_text='The day of the first occurence'),
        ),
        migrations.AlterField(
            model_name='recurringtransaction',
            name='template',
            field=models.OneToOneField(help_text='The template for the transaction occurences', on_delete=django.db.models.deletion.CASCADE, to='transaction.TransactionTemplate'),
        ),
        migrations.AlterField(
            model_name='transaction',
            name='company',
            field=models.ForeignKey(help_text='The company', on_delete=django.db.models.deletion.CASCADE, related_name='transactions', to='company.Company'),
        ),
        migrations.AlterField(
            model_name='transaction',
            name='date',
            field=models.DateField(help_text='The date of the transaction'),
        ),
        migrations.AlterField(
            model_name='transaction',
            name='description',
            field=models.TextField(help_text='A short description of what the transaction is for'),
        ),
        migrations.AlterField(
            model_name='transaction',
            name='money',
            field=models.IntegerField(help_text='The amount of money transferred in the transaction'),
        ),
        migrations.AlterField(
            model_name='transaction',
            name='notes',
            field=models.TextField(blank=True, help_text='A longer description and details about the transaction'),
        ),
        migrations.AlterField(
            model_name='transaction',
            name='recurring_transaction',
            field=models.ForeignKey(blank=True, help_text='The associated recurring transaction, if applicable', null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='transactions', to='transaction.RecurringTransaction'),
        ),
        migrations.AlterField(
            model_name='transaction',
            name='type',
            field=models.CharField(choices=[('IN', 'income'), ('EX', 'expense')], help_text='The type of transaction (income or expense)', max_length=2),
        ),
        migrations.AlterField(
            model_name='transactiontemplate',
            name='description',
            field=models.TextField(help_text='A short description of what the transaction is for'),
        ),
        migrations.AlterField(
            model_name='transactiontemplate',
            name='money',
            field=models.IntegerField(help_text='The amount of money transferred in the transaction'),
        ),
        migrations.AlterField(
            model_name='transactiontemplate',
            name='notes',
            field=models.TextField(blank=True, help_text='A longer description and details about the transaction'),
        ),
        migrations.AlterField(
            model_name='transactiontemplate',
            name='type',
            field=models.CharField(choices=[('IN', 'income'), ('EX', 'expense')], help_text='The type of transaction (income or expense)', max_length=2),
        ),
    ]
