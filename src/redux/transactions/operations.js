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
      toast.success('🦄 success delete!');
      return data.id;
    } catch (error) {
      toast.error(`🦄 Error! ${error.message}`);
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
    console.log(month, year);
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
