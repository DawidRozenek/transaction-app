import { Component, OnInit } from '@angular/core';
import  *  as  transactionsJSON  from  '../../transactions.json';
import { Transaction, SortProperty, SortOrder, newTransactionMock, defaultFilters } from '../../shared/transactions.model';
import { TransactionsFormFactory } from '../../shared/transactions-form.factory';
import { distinctUntilChanged, debounceTime, startWith, filter } from 'rxjs/operators'
import { combineLatest, Subject } from 'rxjs';
import { UnifyDates, filterTransactions } from '../../shared/transactions.utils';
import { FormControl } from '@angular/forms';
import cloneDeep from 'lodash/cloneDeep';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
  accountMoney = 5824.76;
  submit$ = new Subject<Transaction>();
  transactions = UnifyDates((transactionsJSON as unknown as { default: { data: Transaction[] } }).default.data);
  filteredTransactions = [...this.transactions];
  filters = this.transactionFormFactory.buildFiltersForm();
  newTransactionForm = this.transactionFormFactory.buildNewTransactionForm(this.accountMoney);

  get searchControl(): FormControl {
    return this.filters.get('search') as FormControl;
  }

  get sortPropertyControl(): FormControl {
    return this.filters.get('sortProperty') as FormControl;
  }

  get sortOrderControl(): FormControl {
    return this.filters.get('sortOrder') as FormControl;
  }

  constructor(
    private transactionFormFactory: TransactionsFormFactory,
  ) { }

  ngOnInit(): void {
    this.watchFilters();
  }

  watchFilters(): void {
    combineLatest(
      this.sortPropertyControl
        .valueChanges
        .pipe(startWith(SortProperty.date)),

      this.sortOrderControl
        .valueChanges
        .pipe(startWith(SortOrder.desc)),

      this.searchControl
        .valueChanges
        .pipe(
          debounceTime(500),
          distinctUntilChanged(),
          startWith(''),
        )
    )
    .pipe()
    .subscribe(([property, order, search]: [SortProperty, SortOrder, string]) => {
      this.filteredTransactions = filterTransactions(this.transactions, property, order, search);
    })
  }

  onSubmit(formValue): void {
    const payload: Transaction = { ...newTransactionMock };
    payload.dates.valueDate = Date.now();
    payload.merchant.name = formValue.toAccount;
    payload.transaction.amountCurrency.amount = formValue.amount;

    this.transactions.push(cloneDeep(payload));
    this.resetFilters();
    this.accountMoney -= +formValue.amount;

    this.newTransactionForm
      .get('fromAccount')
      .setValue(this.transactionFormFactory.getFromAccountValue(this.accountMoney));
  }

  resetFilters(): void {
    this.filters.patchValue(defaultFilters);
  }
}
