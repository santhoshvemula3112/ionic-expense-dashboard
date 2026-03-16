import { Component, OnInit } from '@angular/core';
import { IonicModule, NavController, AlertController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { createOutline, trashOutline, add } from 'ionicons/icons';

import { ExpenseService, Expense } from '../services/expense.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class DashboardPage implements OnInit {

  expenses: Expense[] = [];

  constructor(
    private navCtrl: NavController,
    private expenseService: ExpenseService,
    private alertCtrl: AlertController
  ) {

    // REGISTER ICONS
    addIcons({
      createOutline,
      trashOutline,
      add
    });
  }

  ngOnInit() {
    this.loadExpenses();
  }

  ionViewWillEnter() {
    this.loadExpenses();
  }

  loadExpenses() {
    this.expenses = this.expenseService.getExpenses();
  }

  getTotal(): number {
    return this.expenses.reduce((sum, expense) => sum + expense.amount, 0);
  }

  goToAddExpense() {
    this.navCtrl.navigateForward('/add-expense');
  }

  goToEditExpense(index: number) {
    this.navCtrl.navigateForward(`/add-expense/${index}`);
  }

  async deleteExpense(index: number) {

    const alert = await this.alertCtrl.create({
      header: 'Delete Expense',
      message: 'Are you sure you want to delete this expense?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          role: 'destructive',
          handler: () => {
            this.expenseService.deleteExpense(index);
            this.loadExpenses();
          }
        }
      ]
    });

    await alert.present();
  }
}
