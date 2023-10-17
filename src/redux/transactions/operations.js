import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
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
  async (body, { rejectWithValue }) => {
    const data = {
      transactionDate: body.transactionDate,
      type: body.type,
      categoryId: body.categoryId,
      comment: body.comment,
      amount: body.amount,
    };
    try {
      const res = await swaggerApi.post('transactions', data);
      toast.success(`Transaction added💸`);
      return res.data;
    } catch (error) {
      toast.error(`Invalid input, check your data`);
      return rejectWithValue(error.message);
    }
  }
);

export const deleteTransactionThunk = createAsyncThunk(
  'deleteTransaction',
  async (id, { rejectWithValue }) => {
    try {
      await swaggerApi.delete(`transactions/${id}`);
      toast.success('Transaction delete success!');
      return id;
    } catch (error) {
      toast.error(`Error! ${error.message}`);
      return rejectWithValue(error.message);
    }
  }
);

export const updateTransactionThunk = createAsyncThunk(
  'updateTransaction',
  async (body, { rejectWithValue }) => {
    const data = {
      transactionDate: body.transactionDate,
      type: body.type,
      comment: body.comment,
      amount: body.amount,
    };
    try {
      const res = await swaggerApi.patch(`transactions/${body.id}`, data);
      toast.success('Edit completed!');
      return res.data;
    } catch (error) {
      toast.error(`Your data is not valid, check your data`);
      return rejectWithValue(error.message);
    }
  }
);

export const fetchTransactionCategory = createAsyncThunk(
  'transactionCategory',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await swaggerApi.get('transaction-categories');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchTransactionsSummary = createAsyncThunk(
  'transactionsSummary',
  async ({ month, year }, { rejectWithValue }) => {
    try {
      const { data } = await swaggerApi.get(
        `transactions-summary?month=${month}&year=${year}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
