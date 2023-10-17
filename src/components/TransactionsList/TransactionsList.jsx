import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAllCategories,
  selectError,
  selectFIltered,
  selectLoading,
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
  const [sortCriteria, setSortCriteria] = useState({
    value: 'date',
    label: 'Date',
    isReverse: false,
  });
  const { open, close, isOpen, data } = useModal();
  const categories = useSelector(selectAllCategories);
  const filteredTransactions = useSelector(state =>
    selectFIltered(state, sortCriteria)
  );
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

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

  return (
    <>
      {loading && <Loader />}
      {error && <h1>Something went wrong... 😢</h1>}
      {filteredTransactions.length > 0 ? (
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
                {filteredTransactions.map(transaction => (
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
