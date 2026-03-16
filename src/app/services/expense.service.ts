import { Injectable } from '@angular/core';

export interface Expense {
  name: string;
  amount: number;
  date: string;
}

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private expenses: Expense[] = [
    { name: 'Rent', amount: 500, date: '2026-03-15' },
    { name: 'Groceries', amount: 120, date: '2026-03-14' },
    { name: 'Internet', amount: 40, date: '2026-03-13' }
  ];

  getExpenses(): Expense[] {
    return [...this.expenses];
  }

  getExpenseByIndex(index: number): Expense | undefined {
    return this.expenses[index];
  }

  addExpense(expense: Expense) {
    this.expenses.push(expense);
  }

  updateExpense(index: number, updatedExpense: Expense) {
    if (index >= 0 && index < this.expenses.length) {
      this.expenses[index] = updatedExpense;
    }
  }

  deleteExpense(index: number) {
    if (index >= 0 && index < this.expenses.length) {
      this.expenses.splice(index, 1);
    }
  }
}
