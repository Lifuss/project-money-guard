import Loader from 'components/Loader/Loader';
import { StyledMobileWrapper } from 'components/TransactionsList/TransactionsList.styled';
import React, { useEffect } from 'react';
import TransactionsItem from '../TransactionsItem/TransactionsItem';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectTransactions } from 'redux/transactions/selectors';
import { selectLoading } from 'redux/auth/selectors';
import { fetchTransactionsThunk } from 'redux/transactions/operations';
import {
  StyledNotFoundTitle,
  StyledTansNotFound,
} from 'components/TransactionsItem/TransactionsItem.styled';

const MobileList = () => {
  const dispatch = useDispatch();
  const transactions = useSelector(selectTransactions);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchTransactionsThunk());
  }, [dispatch]);
  return (
    <>
      {loading && <Loader />}
      {error && <h1>Something went wrong... 😢</h1>}
      {transactions.length > 0 ? (
        <StyledMobileWrapper>
          {transactions.map(transaction => (
            <TransactionsItem key={transaction.id} transaction={transaction} />
          ))}
        </StyledMobileWrapper>
      ) : (
        <StyledTansNotFound>
          <StyledNotFoundTitle>
            No transactions found, lets create it!
          </StyledNotFoundTitle>
        </StyledTansNotFound>
      )}
    </>
  );
};

export default MobileList;
