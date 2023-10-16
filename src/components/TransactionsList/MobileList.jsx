import React, { useEffect, useState } from 'react';
import TransactionsItem from '../TransactionsItem/TransactionsItem';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAllCategories,
  selectError,
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
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const categories = useSelector(selectAllCategories);
  const [sortCriteria, setSortCriteria] = useState({
    value: 'date',
    label: 'Date',
  });
  useEffect(() => {
    dispatch(fetchTransactionsThunk());
    dispatch(fetchTransactionCategory());
  }, [dispatch]);
  const sortTransactions = () => {
    const sortedTransactions = [...transactions];

    switch (sortCriteria.value) {
      case 'date':
        sortedTransactions.sort(
          (a, b) => new Date(b.transactionDate) - new Date(a.transactionDate)
        );
        break;
      case 'amount':
        sortedTransactions.sort((a, b) => b.amount - a.amount);
        break;
      case 'category':
        sortedTransactions.sort((a, b) => {
          const categoryA =
            categories.find(cat => cat.id === a.categoryId)?.name || '';
          const categoryB =
            categories.find(cat => cat.id === b.categoryId)?.name || '';
          return categoryA.localeCompare(categoryB);
        });
        break;
      default:
        break;
    }

    return sortedTransactions;
  };

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
          {sortTransactions().map(transaction => (
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
