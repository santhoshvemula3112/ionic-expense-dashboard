import { Component } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExpenseService } from '../services/expense.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class DashboardPage {

  expenses: { name: string; amount: number; date: string }[] = [];

  constructor(
    private navCtrl: NavController,  // NavController for navigation
    private expenseService: ExpenseService
  ) { }

  ionViewWillEnter() {
    // Load the latest expenses whenever this page is shown
    this.expenses = this.expenseService.getExpenses();
  }

  // Navigate to Add Expense page
  goToAddExpense() {
    this.navCtrl.navigateForward('/add-expense');
  }
}
