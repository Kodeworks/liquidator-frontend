import { ActionCreators, initialState, reducer } from '../transactions';

import { ITransaction, TransactionType } from '../../declarations/transaction';

const tx: ITransaction = {
  companyId: 0,
  date: '01.01.1970',
  id: 0,
  money: 10000,
  name: 'Test transaction #0',
  type: TransactionType.income,
};

test('adds a new transaction', () => {
  let state = initialState;
  expect(state.transactions.length).toBe(0);
  state = reducer(state, ActionCreators.addTransaction(tx));
  state = reducer(state, ActionCreators.addTransaction({ ...tx, id: 1 }));

  const expected: Array<ITransaction> = [tx, { ...tx, id: 1 }];

  state.transactions.forEach((e, i) => expect(e).toEqual(expected[i]));
});

test('removes a transaction', () => {
  let state = initialState;
  expect(state.transactions.length).toBe(0);
  state = reducer(state, ActionCreators.addTransaction(tx));
  state = reducer(state, ActionCreators.addTransaction({ ...tx, id: 1 }));
  expect(state.transactions.length).toBe(2);
  state = reducer(state, ActionCreators.removeTransaction(tx));
  expect(state.transactions.length).toBe(1);
});

test('doesn\'t remove if no match', () => {
  let state = initialState;
  expect(state.transactions.length).toBe(0);
  state = reducer(state, ActionCreators.addTransaction(tx));
  state = reducer(state, ActionCreators.addTransaction({ ...tx, id: 1 }));
  expect(state.transactions.length).toBe(2);
  state = reducer(state, ActionCreators.removeTransaction({ ...tx, id: 2 }));
  expect(state.transactions.length).toBe(2);
});
