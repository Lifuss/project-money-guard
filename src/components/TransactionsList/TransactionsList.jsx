import TransactionsItem from 'components/TransactionsItem/TransactionsItem';
import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectError,
  selectLoading,
  selectTransactions,
} from 'redux/transactions/selectors';

const TransactionsList = () => {
  const transactions = useSelector(selectTransactions);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Something went wrong... 😢</h1>}
      {transactions ? (
        <ul>
          {transactions?.map(transaction => (
            <TransactionsItem key={transaction.id} transaction={transaction} />
          ))}
        </ul>
      ) : (
        <h3>Oh you dont have transactions yet, lets create it!</h3>
      )}
    </div>
  );
};

export default TransactionsList;
