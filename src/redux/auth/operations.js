import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const swaggerApi = axios.create({
  baseURL: 'https://wallet.goit.ua/api/',
});

const setToken = token => {
  swaggerApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const clearToken = () => {
  swaggerApi.defaults.headers.common.Authorization = ``;
};

export const registerThunk = createAsyncThunk(
  'register',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await swaggerApi.post('auth/sign-up', credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await swaggerApi.post('auth/sign-in', credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  'logout',
  async (_, { rejectWithValue }) => {
    try {
      await swaggerApi.delete('auth/sign-out');
      clearToken();
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const refreshThunk = createAsyncThunk(
  'refresh',
  async (_, { rejectWithValue, getState }) => {
    const savedToken = getState().auth.token;
    if (!savedToken) {
      return rejectWithValue('token was not found');
    }
    try {
      setToken(savedToken);
      const { data } = await swaggerApi.get('/users/current');
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
