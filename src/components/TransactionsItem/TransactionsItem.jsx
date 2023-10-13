import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTransactionThunk } from 'redux/transactions/operations';
import {
  StyledBtnBox,
  StyledDeleteBtn,
  StyledEditBtn,
  StyledParWrapper,
  StyledParagraph,
  StyledTabletBtnWrapper,
  StyledTabletCategoryPar,
  StyledTabletCommentPar,
  StyledTabletDatePar,
  StyledTabletItem,
  StyledTabletSumPar,
  StyledTabletTypePar,
  StyledTransaction,
} from './TransactionsItem.styled';
import { selectCategories } from 'redux/transactions/selectors';
import sprite from '../../images/sprite.svg';

const TransactionsItem = ({ transaction }) => {
  const categories = useSelector(selectCategories);
  const category = categories.find(cat => cat.id === transaction.categoryId);
  const dispatch = useDispatch();
  const handleBtnDelete = id => {
    dispatch(deleteTransactionThunk(id));
  };
  return (
    <>
      <StyledTransaction
        style={{
          borderLeft:
            transaction.type === 'INCOME'
              ? '5px solid #ff868d'
              : '5px solid #FFB627',
        }}
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
          <span>{categories ? category.name : '-'}</span>
        </StyledParWrapper>
        <StyledParWrapper>
          <StyledParagraph>Comment</StyledParagraph>
          <span>{transaction.comment}</span>
        </StyledParWrapper>
        <StyledParWrapper>
          <StyledParagraph>Sum</StyledParagraph>
          <span>{transaction.amount}</span>
        </StyledParWrapper>
        <StyledBtnBox>
          <StyledDeleteBtn onClick={() => handleBtnDelete(transaction.id)}>
            Delete
          </StyledDeleteBtn>
          <StyledEditBtn>
            <svg width="14" height="14">
              <use href={`${sprite}#edit`} />
            </svg>
            Edit
          </StyledEditBtn>
        </StyledBtnBox>
      </StyledTransaction>
      <StyledTabletItem>
        <StyledTabletDatePar>
          {formatDate(transaction.transactionDate)}
        </StyledTabletDatePar>
        <StyledTabletTypePar>
          {transaction.type === 'INCOME' ? '+' : '-'}
        </StyledTabletTypePar>
        <StyledTabletCategoryPar>
          {categories ? category.name : '-'}
        </StyledTabletCategoryPar>
        <StyledTabletCommentPar>{transaction.comment}</StyledTabletCommentPar>
        <StyledTabletSumPar
          style={{
            color: transaction.type === 'INCOME' ? '#FFB627' : '#FF868D',
          }}
        >
          {transaction.amount}
        </StyledTabletSumPar>
        <StyledTabletBtnWrapper>
          <StyledEditBtn>
            <svg width="14" height="14">
              <use href={`${sprite}#edit`} />
            </svg>
          </StyledEditBtn>
          <StyledDeleteBtn onClick={() => handleBtnDelete(transaction.id)}>
            Delete
          </StyledDeleteBtn>
        </StyledTabletBtnWrapper>
      </StyledTabletItem>
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
