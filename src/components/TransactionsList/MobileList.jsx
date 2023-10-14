import Loader from 'components/Loader/Loader';
import { StyledMobileWrapper } from 'components/TransactionsList/TransactionsList.styled';
import React from 'react';
import TransactionsItem from '../TransactionsItem/TransactionsItem';
import { useSelector } from 'react-redux';
import { selectError, selectTransactions } from 'redux/transactions/selectors';
import { selectLoading } from 'redux/auth/selectors';

const MobileList = () => {
  const transactions = useSelector(selectTransactions);

  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  return (
    <>
      <StyledMobileWrapper>
        {loading && <Loader />}
        {error && <h1>Something went wrong... 😢</h1>}
        {transactions.length > 0 ? (
          transactions.map(transaction => (
            <TransactionsItem key={transaction.id} transaction={transaction} />
          ))
        ) : (
          <h3>You don't have transactions yet</h3>
        )}
      </StyledMobileWrapper>
    </>
  );
};

export default MobileList;
