import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { SortProperty, SortOrder } from './transactions.model';

@Injectable({ providedIn: 'root' })
export class TransactionsFormFactory {
  constructor(private formBuilder: FormBuilder) {}

  buildNewTransactionForm(accountMoney: number): FormGroup {
    return this.formBuilder.group({
      fromAccount: [{ value: this.getFromAccountValue(accountMoney), disabled: true }],
      toAccount: ['', [Validators.required]],
      amount: ['', [Validators.required, this.moneyLimit(accountMoney)]],
    });
  }

  buildFiltersForm(): FormGroup {
    return this.formBuilder.group({
      search: [''],
      sortProperty: [SortProperty.date],
      sortOrder: [SortOrder.desc],
    })
  }

  moneyLimit(accountMoney: number): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const isLimit = accountMoney - control.value < -500;
      return isLimit ? { moneyLimit: { value: control.value }} : null;
    };
  }

  getFromAccountValue(money: number): string {
    return 'Free Checking(4692) - $' + money;
  }
}
