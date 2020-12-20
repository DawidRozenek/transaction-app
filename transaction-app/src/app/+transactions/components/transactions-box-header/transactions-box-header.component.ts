import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-transactions-box-header',
  templateUrl: './transactions-box-header.component.html',
  styleUrls: ['./transactions-box-header.component.scss']
})
export class TransactionsBoxHeaderComponent {
  @Input() iconName: string;
  @Input() small = false;
}
