import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectCategories,
  selectError,
  selectLoading,
  selectTransactions,
} from 'redux/transactions/selectors';
import Loader from 'components/Loader/Loader';
import {
  StyledMobileWrapper,
  StyledTable,
  StyledTableWrapper,
  StyledTbodyTable,
  StyledTd,
  StyledThead,
  StyledTransactionsList,
} from './TransactionsList.styled';
import {
  StyledBtnBox,
  StyledDeleteBtn,
  StyledEditBtn,
} from 'components/TransactionsItem/TransactionsItem.styled';
import TransactionsItem from 'components/TransactionsItem/TransactionsItem';
import sprite from '../../images/sprite.svg';

const TransactionsList = ({ handleDelete }) => {
  const transactions = useSelector(selectTransactions);
  const categories = useSelector(selectCategories);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <StyledTransactionsList>
      {loading && <Loader />}
      {error && <h1>Something went wrong... 😢</h1>}
      <StyledMobileWrapper>
        {transactions.length > 0 ? (
          transactions.map(transaction => (
            <TransactionsItem key={transaction.id} transaction={transaction} />
          ))
        ) : (
          <h3>Oh, you don't have transactions yet. Let's create one!</h3>
        )}
      </StyledMobileWrapper>

      <StyledTableWrapper>
        <StyledTable>
          <StyledThead>
            <tr>
              <th>Date</th>
              <th>Type</th>
              <th>Category</th>
              <th>Comment</th>
              <th>Amount</th>
              <th>Sum</th>
            </tr>
          </StyledThead>
          <StyledTbodyTable>
            {transactions.length > 0 ? (
              transactions.map(transaction => (
                <tr key={transaction.id}>
                  <StyledTd>{transaction.transactionDate}</StyledTd>
                  <StyledTd>
                    {transaction.type === 'INCOME' ? '+' : '-'}
                  </StyledTd>
                  <StyledTd>
                    {categories.find(cat => cat.id === transaction.categoryId)
                      ?.name || '-'}
                  </StyledTd>
                  <StyledTd>{transaction.comment}</StyledTd>
                  <StyledTd>{transaction.amount}</StyledTd>
                  <StyledTd>
                    <StyledBtnBox>
                      <StyledEditBtn>
                        <svg width="14" height="14">
                          <use href={`${sprite}#edit`} />
                        </svg>
                      </StyledEditBtn>
                      <StyledDeleteBtn>Delete</StyledDeleteBtn>
                    </StyledBtnBox>
                  </StyledTd>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">No transactions found.</td>
              </tr>
            )}
          </StyledTbodyTable>
        </StyledTable>
      </StyledTableWrapper>
    </StyledTransactionsList>
  );
};

export default TransactionsList;
