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
      {
        id: 'e4639801-c0f3-4a44-b87f-96cb9b4305b3',
        transactionDate: '2023-01-09',
        type: 'INCOME',
        comment: 'otrimav bonus za krytii design',
        amount: 8000,
        balanceAfter: 14000,
        categoryId: '27eb4b75-9a42-4991-a802-4aefe21ac3ce',
        userId: 'e0d5fbfd-d4d0-4001-92e2-911580cc12f9',
      },
      {
        id: 'e4639801-c0f3-4a44-b87f-96cb9b4305b4',
        transactionDate: '2023-01-09',
        type: 'EXPENSE',
        comment: 'kypiv garage',
        amount: -10000,
        balanceAfter: 4000,
        categoryId: '27eb4b75-9a42-4991-a802-4aefe21ac3ce',
        userId: 'e0d5fbfd-d4d0-4001-92e2-911580cc12f9',
      },
      {
        id: 'e4639801-c0f3-4a44-b87f-96cb9b4305b5',
        transactionDate: '2023-01-09',
        type: 'INCOME',
        comment: 'otrimav bonus za krytii design',
        amount: 8000,
        balanceAfter: 14000,
        categoryId: '27eb4b75-9a42-4991-a802-4aefe21ac3ce',
        userId: 'e0d5fbfd-d4d0-4001-92e2-911580cc12f9',
      },
      {
        id: 'e4639801-c0f3-4a44-b87f-96cb9b4305b6',
        transactionDate: '2023-01-09',
        type: 'EXPENSE',
        comment: 'kypiv garage',
        amount: -10000,
        balanceAfter: 4000,
        categoryId: '27eb4b75-9a42-4991-a802-4aefe21ac3ce',
        userId: 'e0d5fbfd-d4d0-4001-92e2-911580cc12f9',
      },
      {
        id: 'e4639801-c0f3-4a44-b87f-96cb9b4305b7',
        transactionDate: '2023-01-09',
        type: 'INCOME',
        comment: 'otrimav bonus za krytii design',
        amount: 8000,
        balanceAfter: 14000,
        categoryId: '27eb4b75-9a42-4991-a802-4aefe21ac3ce',
        userId: 'e0d5fbfd-d4d0-4001-92e2-911580cc12f9',
      },
      {
        id: 'e4639801-c0f3-4a44-b87f-96cb9b4305b8',
        transactionDate: '2023-01-09',
        type: 'EXPENSE',
        comment: 'kypiv garage',
        amount: -10000,
        balanceAfter: 4000,
        categoryId: '27eb4b75-9a42-4991-a802-4aefe21ac3ce',
        userId: 'e0d5fbfd-d4d0-4001-92e2-911580cc12f9',
      },
    ],
    categories: [
      {
        id: 'c9d9e447-1b83-4238-8712-edc77b18b739',
        name: 'Main expenses',
        type: 'EXPENSE',
      },
      {
        id: '27eb4b75-9a42-4991-a802-4aefe21ac3ce',
        name: 'Products',
        type: 'EXPENSE',
      },
      {
        id: '3caa7ba0-79c0-40b9-ae1f-de1af1f6e386',
        name: 'Car',
        type: 'EXPENSE',
      },
      {
        id: 'bbdd58b8-e804-4ab9-bf4f-695da5ef64f4',
        name: 'Self care',
        type: 'EXPENSE',
      },
      {
        id: '76cc875a-3b43-4eae-8fdb-f76633821a34',
        name: 'Child care',
        type: 'EXPENSE',
      },
      {
        id: '128673b5-2f9a-46ae-a428-ec48cf1effa1',
        name: 'Household products',
        type: 'EXPENSE',
      },
      {
        id: '1272fcc4-d59f-462d-ad33-a85a075e5581',
        name: 'Education',
        type: 'EXPENSE',
      },
      {
        id: 'c143130f-7d1e-4011-90a4-54766d4e308e',
        name: 'Leisure',
        type: 'EXPENSE',
      },
      {
        id: '719626f1-9d23-4e99-84f5-289024e437a8',
        name: 'Other expenses',
        type: 'EXPENSE',
      },
      {
        id: '3acd0ecd-5295-4d54-8e7c-d3908f4d0402',
        name: 'Entertainment',
        type: 'EXPENSE',
      },
      {
        id: '063f1132-ba5d-42b4-951d-44011ca46262',
        name: 'Income',
        type: 'INCOME',
      },
    ],
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
