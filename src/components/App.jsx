import CurrencyTab from 'pages/CurrencyTab';
import DashboardPage from 'pages/DashboardPage';
import HomeTab from 'pages/HomeTab';
import PageNotFound from 'pages/PageNotFound';
import StatisticsTab from 'pages/StatisticsTab';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from 'routes/PrivateRoute';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />}>
        <Route
          index
          element={
            <PrivateRoute>
              <HomeTab />
            </PrivateRoute>
          }
        />
        <Route
          path="statistics"
          element={
            <PrivateRoute>
              <StatisticsTab />
            </PrivateRoute>
          }
        />
        <Route
          path="currency"
          element={
            <PrivateRoute>
              <CurrencyTab />
            </PrivateRoute>
          }
        />
      </Route>
      <Route
        path="*"
        element={
          <h1>
            <PageNotFound />
          </h1>
        }
      />
    </Routes>
  );
};
