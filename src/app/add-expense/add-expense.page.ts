import { Component } from '@angular/core';
import { IonicModule, NavController, AlertController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExpenseService } from '../services/expense.service';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.page.html',
  styleUrls: ['./add-expense.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AddExpensePage {

  name: string = '';
  amount: number | null = null;
  date: string = '';

  constructor(
    private navCtrl: NavController,
    private expenseService: ExpenseService,
    private alertCtrl: AlertController
  ) { }

  async addExpense() {
    if (this.name && this.amount && this.date) {
      // Add the expense
      this.expenseService.addExpense({
        name: this.name,
        amount: this.amount,
        date: this.date
      });

      // Show success alert
      const alert = await this.alertCtrl.create({
        header: 'Success',
        message: 'Expense added!',
        buttons: ['OK']
      });
      await alert.present();

      // Navigate back to dashboard
      this.navCtrl.navigateBack('/dashboard');
    } else {
      // Show error alert if any field is empty
      const alert = await this.alertCtrl.create({
        header: 'Error',
        message: 'Please fill all fields',
        buttons: ['OK']
      });
      await alert.present();
    }
  }
}
