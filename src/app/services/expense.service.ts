import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private expenses = [
    { name: 'Rent', amount: 500, date: '2026-03-15' },
    { name: 'Groceries', amount: 120, date: '2026-03-14' },
    { name: 'Internet', amount: 40, date: '2026-03-13' }
  ];

  constructor() { }

  addExpense(expense: { name: string; amount: number; date: string }) {
    this.expenses.push(expense);
  }

  getExpenses() {
    return this.expenses;
  }
}
