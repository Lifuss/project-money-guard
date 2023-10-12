import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTransactionThunk } from 'redux/transactions/operations';
import { StyledDeleteBtn } from './TransactionsItem.styled';
import { selectCategories } from 'redux/transactions/selectors';

const TransactionsItem = ({ transaction }) => {
  const categories = useSelector(selectCategories);
  const category = categories.find(cat => cat.id === transaction.categoryId);
  const dispatch = useDispatch();
  const handleBtnDelete = id => {
    dispatch(deleteTransactionThunk(id));
  };
  return (
    <li>
      <p>
        Date<span>{transaction.transactionDate}</span>
      </p>
      <p>Type{transaction.type}</p>
      <p>Category{categories ? category.name : 'N/A'}</p>
      <p>Comment{transaction.comment}</p>
      <p>Sum{transaction.amount}</p>
      <div>
        <StyledDeleteBtn onClick={() => handleBtnDelete(transaction.id)}>
          Delete
        </StyledDeleteBtn>
        <button>Edit</button>
      </div>
    </li>
  );
};

export default TransactionsItem;
