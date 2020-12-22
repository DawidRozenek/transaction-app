export interface Transaction {
  categoryCode: string;
  dates: {
    valueDate: number
  };
  merchant: {
    name: string;
    accountNumber: string;
  };
  transaction: {
    amountCurrency: {
      amount: string;
      currencyCode: string;
    };
    creditDebitIndicator: string;
    type: string;
  };
}

export enum SortProperty {
  date = 'dates.valueDate',
  beneficiary = 'merchant.name',
  amount = 'transaction.amountCurrency.amount',
}

export enum SortOrder {
  asc = 'asc',
  desc = 'desc',
}

export const newTransactionMock: Transaction = {
  categoryCode: '#c12020',
  dates: {
    valueDate: 1,
  },
  merchant: {
    name: '',
    accountNumber: 'SI64397745065188824'
  },
  transaction: {
    amountCurrency: {
      amount: '',
      currencyCode: 'EUR',
    },
    creditDebitIndicator: 'DBIT',
    type: 'Online Transfer'
  },
};

export const defaultFilters = {
  search: '',
  sortProperty: SortProperty.date,
  sortOrder: SortOrder.desc,
};
