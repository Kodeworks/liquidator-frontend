/**
 * @author "Fredrik August Madsen-Malmo"
 * @summary "Funtion to summarize the elements in the transaction ``shopping cart''"
 */

import { ITransactionState as IStore } from '../reducers/transactions';

import { TransactionType } from '../declarations/transaction';

export const sum = (store: IStore) => (
  store.intermediary.reduce((prev, curr) => {
    // We definitely know that this transaction will exist as we're adding transaction ids to the intermediary array.
    const tx = store.transactions.find(e => e.id === curr)!;
    return prev + (tx.type === TransactionType.expense ? -tx.money : tx.money) / 100;
  }, 0)
);