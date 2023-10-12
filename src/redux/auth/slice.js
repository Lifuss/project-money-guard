import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  loginThunk,
  logoutThunk,
  refreshThunk,
  registerThunk,
} from './operations';

const initialState = {
  user: {
    email: '',
    password: '',
  },
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzaWQiOiI2MTQ3NmQ0NS1kMjU4LTRlYzItYWJmMi1iNTFmMGY4MjMzZDEiLCJpYXQiOjE2OTcxMzkzODQsImV4cCI6MTAwMDAwMDE2OTcxMzkzODR9.B31I71pTXdPGeNWYSR65FQUXmH5QAzwX4v0qFw9-Viw',
  isLoggedIn: false,
  isLoading: false,
  isRefresh: false,
};
export const slice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(logoutThunk.fulfilled, (state, { payload }) => {
        return (state = initialState);
      })
      .addCase(refreshThunk.pending, (state, { payload }) => {
        state.isRefresh = true;
      })
      .addCase(refreshThunk.rejected, (state, { payload }) => {
        state.isRefresh = false;
      })
      .addCase(refreshThunk.fulfilled, (state, { payload }) => {
        state.isRefresh = false;
        state.isLoggedIn = true;
        state.user.email = payload.email;
        state.user.password = payload.password;
      })
      .addMatcher(
        isAnyOf(loginThunk.pending, registerThunk.pending, state => {
          state.isLoading = true;
        })
      )
      .addMatcher(
        isAnyOf(loginThunk.fulfilled, registerThunk.fulfilled),
        (state, { payload }) => {
          state.user = payload.user;
          state.token = payload.token;
          state.isLoading = false;
          state.isLoggedIn = true;
        }
      );
  },
});

export const authReducer = slice.reducer;
