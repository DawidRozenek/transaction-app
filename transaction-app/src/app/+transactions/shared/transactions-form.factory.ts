import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup } from '@angular/forms';
import { SortProperty, SortOrder } from './transactions.model';

@Injectable({ providedIn: 'root' })
export class TransactionsFormFactory {
  constructor(private formBuilder: FormBuilder) {}

  buildFiltersForm(): FormGroup {
    return this.formBuilder.group({
      search: [''],
      sortProperty: [SortProperty.date],
      sortOrder: [SortOrder.desc],
    })
  }
}
