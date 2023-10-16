import React, { useEffect } from 'react';
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
  useEffect(() => {
    dispatch(fetchTransactionsThunk());
    dispatch(fetchTransactionCategory());
  }, [dispatch]);

  const handleTableBtnDelete = id => {
    dispatch(deleteTransactionThunk(id));
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
                  <StyledTh>Date</StyledTh>
                  <StyledTh>Type</StyledTh>
                  <StyledTh>Category</StyledTh>
                  <StyledTh>Comment</StyledTh>
                  <StyledTh>Sum</StyledTh>
                </StyledHeaderTr>
              </thead>
              <StyledTbodyTable>
                {transactions.map(transaction => (
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
          <h2>No transactions found, lets create it!</h2>
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
