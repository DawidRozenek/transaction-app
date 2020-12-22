import { Component, Input } from '@angular/core';
import { Transaction } from '../../shared/transactions.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.scss']
})
export class TransactionsListComponent {
  @Input() transactions: Transaction[];
  @Input() filters: FormGroup;
}
