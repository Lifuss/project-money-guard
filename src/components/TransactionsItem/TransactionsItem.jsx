import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteTransactionThunk,
  fetchTransactionCategory,
} from 'redux/transactions/operations';
import {
  StyledBtnBox,
  StyledDeleteBtn,
  StyledEditBtn,
  StyledParWrapper,
  StyledParagraph,
  StyledSpan,
  StyledTransaction,
} from './TransactionsItem.styled';
import { selectCategories } from 'redux/transactions/selectors';
import sprite from '../../images/sprite.svg';
import useModal from 'hooks/useModal';
import Modal from 'components/Modal/Modal';
import EditTransactionForm from 'components/EditTransactionForm/EditTransactionForm';


const TransactionsItem = ({ transaction }) => {
  const categories = useSelector(selectCategories);
  const { open, close, isOpen } = useModal();
  const dispatch = useDispatch();
  const category = categories.find(cat => cat.id === transaction.categoryId);
  const handleBtnDelete = id => {
    dispatch(deleteTransactionThunk(id));
  };
  useEffect(() => {
    dispatch(fetchTransactionCategory());
  }, [dispatch]);
  return (
    <>
      <StyledTransaction
        $color={transaction.type === 'INCOME' ? '#ff868d' : '#FFB627'}
      >
        <StyledParWrapper>
          <StyledParagraph>Date</StyledParagraph>
          <span>{formatDate(transaction.transactionDate)}</span>
        </StyledParWrapper>
        <StyledParWrapper>
          <StyledParagraph>Type</StyledParagraph>
          <span>{transaction.type}</span>
        </StyledParWrapper>
        <StyledParWrapper>
          <StyledParagraph>Category</StyledParagraph>
          <span>{categories ? category?.name : '-'}</span>
        </StyledParWrapper>
        <StyledParWrapper>
          <StyledParagraph>Comment</StyledParagraph>
          <StyledSpan>
            {transaction.comment.length >= 25
              ? `${transaction.comment.slice(0, 25)}...`
              : transaction.comment}
          </StyledSpan>
        </StyledParWrapper>
        <StyledParWrapper>
          <StyledParagraph>Sum</StyledParagraph>
          <span>{transaction.amount}</span>
        </StyledParWrapper>
        <StyledBtnBox>
          <StyledDeleteBtn onClick={() => handleBtnDelete(transaction.id)}>
            Delete
          </StyledDeleteBtn>
          <StyledEditBtn onClick={() => open(transaction)}>
            <svg width="14" height="14">
              <use href={`${sprite}#edit`} />
            </svg>
            Edit
          </StyledEditBtn>
        </StyledBtnBox>
        {isOpen && (
          <Modal close={close}>
            <EditTransactionForm transaction={transaction} close={close} />
          </Modal>
        )}
      </StyledTransaction>
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

export default TransactionsItem;
