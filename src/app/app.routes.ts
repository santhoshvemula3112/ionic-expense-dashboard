import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadComponent: () => import('./login/login.page').then(m => m.LoginPage) },
  { path: 'dashboard', loadComponent: () => import('./dashboard/dashboard.page').then(m => m.DashboardPage) },
  {
    path: 'add-expense',
    loadComponent: () => import('./add-expense/add-expense.page').then( m => m.AddExpensePage)
  }
];
