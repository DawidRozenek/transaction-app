import { Component, OnInit, Input } from '@angular/core';
import { Transaction } from '../../shared/transactions.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.scss']
})
export class TransactionsListComponent implements OnInit {
  @Input() transactions: Transaction[];
  @Input() filters: FormGroup;

  constructor() { }

  ngOnInit(): void {
    //
  }

}
