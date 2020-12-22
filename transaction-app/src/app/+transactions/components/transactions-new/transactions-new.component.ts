import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-transactions-new',
  templateUrl: './transactions-new.component.html',
  styleUrls: ['./transactions-new.component.scss']
})
export class TransactionsNewComponent {
  @Input() form: FormGroup;
  @Input() accountMoney: number;
  @Output() submit = new EventEmitter();
  @ViewChild('f') myNgForm;

  isPreview = false;

  get amountControl(): FormControl {
    return this.form.get('amount') as FormControl;
  }

  onPreview(): void {
    this.isPreview = true;
  }

  onSubmit(): void {
    const formValue = { ...this.form.value };
    this.myNgForm.resetForm();
    this.submit.emit(formValue);
    this.isPreview = false;
  }
}
