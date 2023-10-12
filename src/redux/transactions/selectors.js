// transactions

export const selectTransactions = state =>
  state.transactions.transactions.items;
export const selectLoading = state => state.transactions.transactions.isLoading;
export const selectError = state => state.transactions.transactions.error;
export const selectCategories = state =>
  state.transactions.transactions.categories;

// summary

export const selectCategoriesSummary = state =>
  state.transactions.summary.categoriesSummary;
export const selectIncomeSummary = state =>
  state.transactions.summary.incomeSummary;
export const selectExpenseSummary = state =>
  state.transactions.summary.expenseSummary;
export const selectPeriodTotal = state =>
  state.transactions.summary.periodTotal;
export const selectYear = state => state.transactions.summary.year;
export const selectMonth = state => state.transactions.summary.month;
