import TransactionsItem from 'components/TransactionsItem/TransactionsItem';
import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectError,
  selectLoading,
  selectTransactions,
} from 'redux/transactions/selectors';
import {
  StyledTransactionWrapper,
  StyledTransactionsList,
} from './TransactionsList.styled';
import Loader from 'components/Loader/Loader';

const TransactionsList = () => {
  const transactions = useSelector(selectTransactions);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  return (
    <StyledTransactionWrapper>
      {loading && <Loader />}
      {error && <h1>Something went wrong... 😢</h1>}
      {transactions ? (
        <StyledTransactionsList>
          {transactions?.map(transaction => (
            <TransactionsItem key={transaction.id} transaction={transaction} />
          ))}
        </StyledTransactionsList>
      ) : (
        <h3>Oh you dont have transactions yet, lets create it!</h3>
      )}
    </StyledTransactionWrapper>
  );
};

export default TransactionsList;
