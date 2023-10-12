import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addTransactionThunk,
  deleteTransactionThunk,
  fetchTransactionCategory,
  fetchTransactionsSummary,
  fetchTransactionsThunk,
  updateTransactionThunk,
} from './operations';

const initialState = {
  transactions: {
    items: [
      {
        id: 'be686c9f-73fd-4802-b226-ecb7c11d36ca',
        transactionDate: '2023-12-10',
        type: 'INCOME',
        comment: 'my salary',
        amount: 10000,
        balanceAfter: 10000,
        categoryId: '063f1132-ba5d-42b4-951d-44011ca46262',
        userId: 'e0d5fbfd-d4d0-4001-92e2-911580cc12f9',
      },
      {
        id: 'e4639801-c0f3-4a44-b87f-96cb9b4305b2',
        transactionDate: '2023-01-09',
        type: 'EXPENSE',
        comment: 'kypiv prodykti',
        amount: -4000,
        balanceAfter: 6000,
        categoryId: '27eb4b75-9a42-4991-a802-4aefe21ac3ce',
        userId: 'e0d5fbfd-d4d0-4001-92e2-911580cc12f9',
      },
    ],
    categories: [],
    isLoading: false,
    error: null,
  },
  summary: {
    categoriesSummary: [],
    incomeSummary: 0,
    expenseSummary: 0,
    periodTotal: 0,
    year: null,
    month: null,
  },
};
export const slice = createSlice({
  name: 'transactions',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchTransactionsThunk.fulfilled, (state, { payload }) => {
        state.transactions.items = payload;
      })
      .addCase(addTransactionThunk.fulfilled, (state, { payload }) => {
        state.transactions.items.push(payload);
      })
      .addCase(deleteTransactionThunk.fulfilled, (state, { payload }) => {
        state.transactions.items = state.transactions.items.filter(
          transaction => transaction.id !== payload
        );
      })
      .addCase(updateTransactionThunk.fulfilled, (state, { payload }) => {
        state.transactions.items = state.transactions.items.map(transaction =>
          transaction.id === payload.id ? payload : transaction
        );
      })
      .addCase(fetchTransactionCategory.fulfilled, (state, { payload }) => {
        state.transactions.categories = payload;
      })
      .addCase(fetchTransactionsSummary.fulfilled, (state, { payload }) => {
        state.summary = payload;
      })
      .addMatcher(
        isAnyOf(
          fetchTransactionsThunk.fulfilled,
          deleteTransactionThunk.fulfilled,
          addTransactionThunk.fulfilled,
          fetchTransactionCategory.fulfilled
        ),
        (state, { payload }) => {
          state.transactions.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchTransactionsThunk.pending,
          deleteTransactionThunk.pending,
          addTransactionThunk.pending,
          fetchTransactionCategory.pending,
          fetchTransactionsSummary.pending
        ),
        (state, { payload }) => {
          state.transactions.isLoading = true;
          state.transactions.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchTransactionsThunk.rejected,
          deleteTransactionThunk.rejected,
          addTransactionThunk.rejected,
          fetchTransactionCategory.rejected,
          fetchTransactionsSummary.rejected
        ),
        (state, { payload }) => {
          state.transactions.error = payload;
          state.transactions.isLoading = false;
        }
      );
  },
});

export const transactionReducer = slice.reducer;
