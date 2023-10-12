import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTransactionThunk } from 'redux/transactions/operations';

const TransactionsItem = ({ transaction }) => {
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
      <p>Category{transaction.categoryId}</p>
      <p>Comment{transaction.comment}</p>
      <p>Sum{transaction.amount}</p>
      <div>
        <button onClick={() => handleBtnDelete(transaction.id)}>Delete</button>
        <button>Edit</button>
      </div>
    </li>
  );
};

export default TransactionsItem;
