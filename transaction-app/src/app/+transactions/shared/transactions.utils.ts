import { Transaction, SortOrder, SortProperty } from './transactions.model';
import * as moment from 'moment';
import get from 'lodash/get';

export const UnifyDates = (transactions: Transaction[]): Transaction[] => {
  return transactions.map(transaction => {
    const date = transaction.dates.valueDate;
    transaction.dates.valueDate = typeof date === "number"
      ? date
      : moment(date).valueOf();

    return transaction;
  })
}

export const sortAlphabetically = (a: Transaction, b: Transaction, order: SortOrder, property: SortProperty) => {
  return order === SortOrder.desc
    ?  get(a, property).toLowerCase() > get(b, property).toLowerCase() ? -1 : 1
    : get(b, property).toLowerCase() > get(a, property).toLowerCase() ? -1 : 1;
}

export const sortNumbers = (a: Transaction, b: Transaction, order: SortOrder, property: SortProperty) => {
  return order === SortOrder.desc
    ? get(b, property) - get(a, property)
    : get(a, property) - get(b, property);
}

export const filterTransactions = (
  transactions: Transaction[], property: SortProperty, order: SortOrder, search: string
): Transaction[] => {
  return [...transactions]
    .filter(transaction => transaction.merchant.name.toLowerCase().match(search.toLowerCase()))
    .sort((a, b) => {
      if (property === SortProperty.beneficiary) {
        return sortAlphabetically(a, b, order, property);
      }

      return sortNumbers(a, b, order, property);
    });
};
