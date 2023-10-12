import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addTransactionThunk,
  deleteTransactionThunk,
  fetchTransactionsThunk,
  updateTransactionThunk,
} from './operations';

const initialState = {
  transactions: {
    items: [],
    isLoading: false,
    error: null,
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
      .addMatcher(
        isAnyOf(
          fetchTransactionsThunk.fulfilled,
          deleteTransactionThunk.fulfilled,
          addTransactionThunk.fulfilled
        ),
        (state, { payload }) => {
          state.transactions.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchTransactionsThunk.pending,
          deleteTransactionThunk.pending,
          addTransactionThunk.pending
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
          addTransactionThunk.rejected
        ),
        (state, { payload }) => {
          state.transactions.error = payload;
          state.transactions.isLoading = false;
        }
      );
  },
});

export const transactionReducer = slice.reducer;
