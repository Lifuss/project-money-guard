import React, { useEffect, useState } from 'react';
import TransactionsItem from '../TransactionsItem/TransactionsItem';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectError,
  selectFIltered,
  selectTransactions,
} from 'redux/transactions/selectors';
import { selectLoading } from 'redux/auth/selectors';
import {
  fetchTransactionCategory,
  fetchTransactionsThunk,
} from 'redux/transactions/operations';
import {
  StyledNotFoundTitle,
  StyledTansNotFound,
} from 'components/TransactionsItem/TransactionsItem.styled';
import Loader from 'components/Loader/Loader';
import { StyledMobileWrapper } from './TransactionsList.styled';
import SortTransaction from 'components/SortTransaction/SortTransaction';
import { StyledSortTransactionBox } from 'components/SortTransaction/SortTransaction.styled';

const MobileList = () => {
  const dispatch = useDispatch();
  const transactions = useSelector(selectTransactions);
  const [sortCriteria, setSortCriteria] = useState({
    value: 'date',
    label: 'Date',
  });
  const filteredTransactions = useSelector(state =>
    selectFIltered(state, sortCriteria)
  );
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchTransactionsThunk());
    dispatch(fetchTransactionCategory());
  }, [dispatch]);

  return (
    <>
      {loading && <Loader />}
      {error && <h1>Something went wrong... 😢</h1>}
      <StyledSortTransactionBox>
        <SortTransaction
          id="sortSelect"
          setSortCriteria={setSortCriteria}
          value={sortCriteria}
        />
      </StyledSortTransactionBox>
      {transactions.length > 0 ? (
        <StyledMobileWrapper>
          {filteredTransactions.map(transaction => (
            <TransactionsItem key={transaction.id} transaction={transaction} />
          ))}
        </StyledMobileWrapper>
      ) : (
        <StyledTansNotFound>
          <StyledNotFoundTitle>
            No transactions found, lets create!
          </StyledNotFoundTitle>
        </StyledTansNotFound>
      )}
    </>
  );
};

export default MobileList;
