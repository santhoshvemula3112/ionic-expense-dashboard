import { Component, OnInit } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
    private expenseService: ExpenseService
  ) { }

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

  deleteExpense(index: number) {
    this.expenseService.deleteExpense(index);
    this.loadExpenses();
  }
}
