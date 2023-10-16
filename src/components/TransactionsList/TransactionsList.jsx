import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAllCategories,
  selectError,
  selectLoading,
  selectTransactions,
} from 'redux/transactions/selectors';
import Loader from 'components/Loader/Loader';
import {
  StyledHeaderTr,
  StyledNoFound,
  StyledSortIcon,
  StyledTable,
  StyledTableBtnWrapper,
  StyledTableWrapper,
  StyledTbodyTable,
  StyledTd,
  StyledTdComment,
  StyledTh,
  StyledThSortActive,
  StyledTr,
  StyledTransactionsList,
} from './TransactionsList.styled';
import sprite from '../../images/sprite.svg';
import {
  StyledDeleteBtn,
  StyledEditBtn,
} from 'components/TransactionsItem/TransactionsItem.styled';
import {
  deleteTransactionThunk,
  fetchTransactionCategory,
  fetchTransactionsThunk,
} from 'redux/transactions/operations';
import useModal from 'hooks/useModal';
import Modal from 'components/Modal/Modal';
import EditTransactionForm from 'components/EditTransactionForm/EditTransactionForm';

const TransactionsList = () => {
  const dispatch = useDispatch();
  const { open, close, isOpen, data } = useModal();
  const transactions = useSelector(selectTransactions);
  const categories = useSelector(selectAllCategories);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const [sortCriteria, setSortCriteria] = useState({
    value: 'date',
    label: 'Date',
    isReverse: false,
  });
  const dateRef = useRef(null);
  const amountRef = useRef(null);
  const categoryRef = useRef(null);

  useEffect(() => {
    dispatch(fetchTransactionsThunk());
    dispatch(fetchTransactionCategory());
  }, [dispatch]);

  const handleTableBtnDelete = id => {
    dispatch(deleteTransactionThunk(id));
  };

  const handleSort = criteria => {
    if (sortCriteria.value === criteria.value) {
      setSortCriteria(prev => ({
        ...prev,
        isReverse: !prev.isReverse,
      }));
    } else {
      setSortCriteria({ ...criteria, isReverse: false });
    }
  };
  const rotateIcon = state => {
    switch (state) {
      case 'date':
        dateRef.current.style.transform = 'rotate(0)';
        amountRef.current.style.transform = 'rotate(180deg)';
        categoryRef.current.style.transform = 'rotate(180deg)';
        break;
      case 'category':
        dateRef.current.style.transform = 'rotate(180deg)';
        amountRef.current.style.transform = 'rotate(180deg)';
        categoryRef.current.style.transform = 'rotate(0)';
        break;
      case 'amount':
        dateRef.current.style.transform = 'rotate(180deg)';
        amountRef.current.style.transform = 'rotate(0)';
        categoryRef.current.style.transform = 'rotate(180deg)';
        break;
      default:
    }
  };

  const sortTransactions = () => {
    const sortedTransactions = [...transactions];

    switch (sortCriteria.value) {
      case 'date':
        sortedTransactions.sort((a, b) => {
          const dateA = new Date(a.transactionDate);
          const dateB = new Date(b.transactionDate);
          return sortCriteria.isReverse ? dateB - dateA : dateA - dateB;
        });
        break;
      case 'amount':
        sortedTransactions.sort((a, b) => {
          return sortCriteria.isReverse
            ? b.amount - a.amount
            : a.amount - b.amount;
        });
        break;
      case 'category':
        sortedTransactions.sort((a, b) => {
          const categoryA =
            categories.find(cat => cat.id === a.categoryId)?.name || '';
          const categoryB =
            categories.find(cat => cat.id === b.categoryId)?.name || '';
          return sortCriteria.isReverse
            ? categoryB.localeCompare(categoryA)
            : categoryA.localeCompare(categoryB);
        });
        break;
      default:
        return sortedTransactions.sort(
          (a, b) => new Date(b.transactionDate) - new Date(a.transactionDate)
        );
    }

    return sortedTransactions;
  };
  return (
    <>
      {loading && <Loader />}
      {error && <h1>Something went wrong... 😢</h1>}
      {transactions.length > 0 ? (
        <StyledTransactionsList>
          <StyledTableWrapper>
            <StyledTable>
              <thead>
                <StyledHeaderTr>
                  <StyledThSortActive
                    onClick={() => {
                      handleSort({
                        value: 'date',
                      });
                      rotateIcon('date');
                    }}
                  >
                    Date
                    <StyledSortIcon ref={dateRef} width="14" height="14">
                      <use href={`${sprite}#arrow_down`} />
                    </StyledSortIcon>
                  </StyledThSortActive>
                  <StyledTh>Type</StyledTh>
                  <StyledThSortActive
                    onClick={() => {
                      handleSort({
                        value: 'category',
                      });
                      rotateIcon('category');
                    }}
                  >
                    Category
                    <StyledSortIcon ref={categoryRef} width="14" height="14">
                      <use href={`${sprite}#arrow_down`} />
                    </StyledSortIcon>
                  </StyledThSortActive>

                  <StyledTh>Comment</StyledTh>
                  <StyledThSortActive
                    onClick={() => {
                      handleSort({
                        value: 'amount',
                      });
                      rotateIcon('amount');
                    }}
                  >
                    Sum
                    <StyledSortIcon ref={amountRef} width="14" height="14">
                      <use href={`${sprite}#arrow_down`} />
                    </StyledSortIcon>
                  </StyledThSortActive>
                </StyledHeaderTr>
              </thead>
              <StyledTbodyTable>
                {sortTransactions().map(transaction => (
                  <StyledTr key={transaction.id}>
                    <StyledTd>
                      {formatDate(transaction.transactionDate)}
                    </StyledTd>
                    <StyledTd>
                      {transaction.type === 'INCOME' ? '+' : '-'}
                    </StyledTd>
                    <StyledTd>
                      {categories.find(cat => cat.id === transaction.categoryId)
                        ?.name || 'Other'}
                    </StyledTd>
                    <StyledTdComment>
                      {transaction.comment.length > 15
                        ? `${transaction.comment.slice(0, 15)}...`
                        : transaction.comment}
                    </StyledTdComment>
                    <StyledTd
                      $color={
                        transaction.type === 'INCOME' ? '#FFB627' : '#FF868D'
                      }
                    >
                      {transaction.amount}
                    </StyledTd>
                    <td>
                      <StyledTableBtnWrapper>
                        <StyledEditBtn onClick={() => open(transaction)}>
                          <svg width="14" height="14">
                            <use href={`${sprite}#edit`} />
                          </svg>
                        </StyledEditBtn>
                        <StyledDeleteBtn
                          onClick={() => handleTableBtnDelete(transaction.id)}
                        >
                          Delete
                        </StyledDeleteBtn>
                      </StyledTableBtnWrapper>
                    </td>
                  </StyledTr>
                ))}
              </StyledTbodyTable>
            </StyledTable>
          </StyledTableWrapper>
          {isOpen && (
            <Modal close={close}>
              <EditTransactionForm transaction={data} close={close} />
            </Modal>
          )}
        </StyledTransactionsList>
      ) : (
        <StyledNoFound>
          <h2>No transactions found, lets create!</h2>
        </StyledNoFound>
      )}
    </>
  );
};
function formatDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear().toString().slice(-2);
  return `${day}.${month}.${year}`;
}

export default TransactionsList;
