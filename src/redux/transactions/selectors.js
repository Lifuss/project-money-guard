export const selectTransactions = state =>
  state.transactions.transactions.items;
export const selectLoading = state => state.transactions.transactions.isLoading;
export const selectError = state => state.transactions.transactions.error;
