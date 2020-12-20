import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsBoxComponent } from './transactions-box.component';

describe('TransactionsBoxComponent', () => {
  let component: TransactionsBoxComponent;
  let fixture: ComponentFixture<TransactionsBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionsBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
