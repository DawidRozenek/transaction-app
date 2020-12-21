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
