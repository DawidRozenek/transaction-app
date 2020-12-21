import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsBoxHeaderComponent } from './transactions-box-header.component';

describe('TransactionsBoxHeaderComponent', () => {
  let component: TransactionsBoxHeaderComponent;
  let fixture: ComponentFixture<TransactionsBoxHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionsBoxHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsBoxHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
