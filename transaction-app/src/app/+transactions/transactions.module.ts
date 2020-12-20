import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsComponent } from './containers/transactions/transactions.component';
import { TransactionsRoutingModule } from './transactions-routing.module';
import { TransactionsListComponent } from './components/transactions-list/transactions-list.component';
import { TransactionsNewComponent } from './components/transactions-new/transactions-new.component';
import { TransactionsBoxHeaderComponent } from './components/transactions-box-header/transactions-box-header.component';
import { TransactionsBoxComponent } from './components/transactions-box/transactions-box.component';

@NgModule({
  declarations: [
    TransactionsComponent,
    TransactionsListComponent,
    TransactionsNewComponent,
    TransactionsBoxHeaderComponent,
    TransactionsBoxComponent
  ],
  imports: [
    CommonModule,
    TransactionsRoutingModule,
  ]
})
export class TransactionsModule { }
