import { Component, OnInit } from '@angular/core';
import { IonicModule, NavController, AlertController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ExpenseService, Expense } from '../services/expense.service';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.page.html',
  styleUrls: ['./add-expense.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AddExpensePage implements OnInit {

  name: string = '';
  amount: number | null = null;
  date: string = '';
  editIndex: number | null = null;

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private expenseService: ExpenseService,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {

    const index = this.route.snapshot.paramMap.get('index');

    if (index !== null) {
      this.editIndex = +index;

      const expense = this.expenseService.getExpenseByIndex(this.editIndex);

      if (expense) {
        this.name = expense.name;
        this.amount = expense.amount;
        this.date = expense.date;
      }
    }
  }


  async saveExpense() {

    if (this.name && this.amount !== null && this.date) {

      const expenseData: Expense = {
        name: this.name,
        amount: this.amount,
        date: this.date
      };

      if (this.editIndex !== null) {

        this.expenseService.updateExpense(this.editIndex, expenseData);

        const alert = await this.alertCtrl.create({
          header: 'Success',
          message: 'Expense updated',
          buttons: ['OK']
        });

        await alert.present();

      } else {

        this.expenseService.addExpense(expenseData);

        const alert = await this.alertCtrl.create({
          header: 'Success',
          message: 'Expense added',
          buttons: ['OK']
        });

        await alert.present();
      }

      this.navCtrl.navigateBack('/dashboard');

    } else {

      const alert = await this.alertCtrl.create({
        header: 'Error',
        message: 'Please fill all fields',
        buttons: ['OK']
      });

      await alert.present();
    }
  }
}
