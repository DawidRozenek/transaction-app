import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsListFiltersComponent } from './transactions-list-filters.component';

describe('TransactionsListFiltersComponent', () => {
  let component: TransactionsListFiltersComponent;
  let fixture: ComponentFixture<TransactionsListFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionsListFiltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsListFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
