import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCategories,
  selectError,
  selectLoading,
  selectTransactions,
} from 'redux/transactions/selectors';
import Loader from 'components/Loader/Loader';
import {
  StyledHeaderTr,
  StyledTable,
  StyledTableBtnWrapper,
  StyledTableWrapper,
  StyledTbodyTable,
  StyledTd,
  StyledTdComment,
  StyledTh,
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
  fetchTransactionsThunk,
} from 'redux/transactions/operations';
import useModal from 'hooks/useModal';
import Modal from 'components/Modal/Modal';
import EditTransactionForm from 'components/EditTransactionForm/EditTransactionForm';

const TransactionsList = () => {
  const dispatch = useDispatch();
  const { open, close, isOpen, data } = useModal();
  const transactions = useSelector(selectTransactions);
  const categories = useSelector(selectCategories);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchTransactionsThunk());
  }, [dispatch]);

  const handleTableBtnDelete = id => {
    dispatch(deleteTransactionThunk(id));
  };

  return (
    <StyledTransactionsList>
      <StyledTableWrapper>
        {loading && <Loader />}
        {error && <h1>Something went wrong... 😢</h1>}
        <StyledTable>
          <thead>
            <StyledHeaderTr>
              <StyledTh>Date</StyledTh>
              <StyledTh>Type</StyledTh>
              <StyledTh>Category</StyledTh>
              <StyledTh>Comment</StyledTh>
              <StyledTh>Sum</StyledTh>
            </StyledHeaderTr>
          </thead>
          <StyledTbodyTable>
            {transactions.length > 0 ? (
              transactions.map(transaction => (
                <StyledTr key={transaction.id}>
                  <StyledTd>{formatDate(transaction.transactionDate)}</StyledTd>
                  <StyledTd>
                    {transaction.type === 'INCOME' ? '+' : '-'}
                  </StyledTd>
                  <StyledTd>
                    {categories.find(cat => cat.id === transaction.categoryId)
                      ?.name || 'Other'}
                  </StyledTd>
                  <StyledTdComment>{transaction.comment}</StyledTdComment>
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
              ))
            ) : (
              <tr>
                <td>No transactions found</td>
              </tr>
            )}
          </StyledTbodyTable>
        </StyledTable>
      </StyledTableWrapper>
      {isOpen && (
        <Modal close={close}>
          <EditTransactionForm transaction={data} />
        </Modal>
      )}
    </StyledTransactionsList>
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
