import { Component, Input } from '@angular/core';
import { Transaction } from '../../shared/transactions.model';

@Component({
  selector: 'app-transactions-list-item',
  templateUrl: './transactions-list-item.component.html',
  styleUrls: ['./transactions-list-item.component.scss']
})
export class TransactionsListItemComponent {
  @Input() transaction: Transaction;

  getLogoUrl(name: string): string {
    return '/assets/' + name.replace(/\s+/g, '-').toLowerCase() + '.png';
  }
}
