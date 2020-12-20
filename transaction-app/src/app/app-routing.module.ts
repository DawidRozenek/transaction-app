import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'transactions',
    loadChildren: () => import('./+transactions/transactions.module').then(m => m.TransactionsModule),
  },
  {
    path: '',
    redirectTo: 'transactions',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'transactions',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
