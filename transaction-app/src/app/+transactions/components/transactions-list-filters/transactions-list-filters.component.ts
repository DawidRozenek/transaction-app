import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { SortProperty, SortOrder } from '../../shared/transactions.model';

@Component({
  selector: 'app-transactions-list-filters',
  templateUrl: './transactions-list-filters.component.html',
  styleUrls: ['./transactions-list-filters.component.scss']
})
export class TransactionsListFiltersComponent implements OnInit {
  @Input() filters: FormGroup;

  sortProperty = SortProperty;
  sortOrder = SortOrder;

  get searchControl(): FormControl {
    return this.filters.get('search') as FormControl;
  }

  constructor() { }

  ngOnInit(): void {
  }

  clearSearch(): void {
    this.searchControl.setValue('');
  }

  onSortPropertyChange({ value }: MatButtonToggleChange): void {
    this.filters.get('sortProperty').setValue(value);
  }
}
