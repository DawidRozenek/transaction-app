import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsComponent } from './containers/transactions/transactions.component';
import { TransactionsRoutingModule } from './transactions-routing.module';
import { TransactionsListComponent } from './components/transactions-list/transactions-list.component';
import { TransactionsNewComponent } from './components/transactions-new/transactions-new.component';
import { TransactionsBoxHeaderComponent } from './components/transactions-box-header/transactions-box-header.component';
import { TransactionsBoxComponent } from './components/transactions-box/transactions-box.component';
import { TransactionsListItemComponent } from './components/transactions-list-item/transactions-list-item.component';
import { DatesPipe } from './shared/dates.pipe';
import { TransactionsListFiltersComponent } from './components/transactions-list-filters/transactions-list-filters.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';

@NgModule({
  declarations: [
    TransactionsComponent,
    TransactionsListComponent,
    TransactionsNewComponent,
    TransactionsBoxHeaderComponent,
    TransactionsBoxComponent,
    TransactionsListItemComponent,
    TransactionsListFiltersComponent,
    DatesPipe,
  ],
  imports: [
    CommonModule,
    TransactionsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatRadioModule,
    MatButtonToggleModule,
  ],
  providers: [FormBuilder],
})
export class TransactionsModule { }
