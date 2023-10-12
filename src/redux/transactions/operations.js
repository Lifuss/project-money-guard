import { createAsyncThunk } from '@reduxjs/toolkit';
import { swaggerApi } from 'redux/auth/operations';

export const fetchTransactionsThunk = createAsyncThunk(
  'fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await swaggerApi.get('transactions');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addTransactionThunk = createAsyncThunk(
  'addTransaction',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await swaggerApi.post('transactions', credentials);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteTransactionThunk = createAsyncThunk(
  'deleteTransaction',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await swaggerApi.delete(`transactions/${id}`);
      return data.id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateTransactionThunk = createAsyncThunk(
  'updateTransaction',
  async (body, { rejectWithValue }) => {
    const data = {
      date: body.transactionDate,
      type: body.type,
      category: body.categoryId,
      comment: body.comment,
      amount: body.amount,
    };
    try {
      const res = await swaggerApi.patch(`transactions/${body.id}`, data);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
