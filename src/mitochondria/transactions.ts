import { fetchWithCallback } from '.';
import { TransactionType } from '../declarations/transaction';
import { IAuthState } from '../store/reducers/auth';

/**
 * Interface for body of a post request (Add Transaction) of the API
 */
export interface INewTransaction {
  company_id: number;
  money: number;
  description: string;
  date: string;  // ISO 8601 format: 'YYYY-MM-DD'
  type: TransactionType;
  notes?: string;
}

/**
 * This function call the calls the @function post function to create the Transaction in the database.
 * @param transaction The transaction we want to post to the API
 * @param authState The authentication state for authenticating with the API
 */
export const createTransaction = async (transaction: INewTransaction) => {
  return await fetchWithCallback('/transaction/', '', {
    body: JSON.stringify(transaction),
    method: 'POST',
  }, {
      200: async resp => await resp.json(),
    });
};