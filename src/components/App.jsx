import CurrencyTab from 'pages/CurrtncyTab/CurrencyTab';
import DashboardPage from 'pages/DashboardPage/DashboardPage';
import HomeTab from 'pages/HomeTab/HomeTab';
import LoginPage from 'pages/LoginPage/LoginPage';
import PageNotFound from 'pages/PageNotFound/PageNotFound';
import RegistrationPage from 'pages/RegistrationPage/RegistrationPage';
import StatisticsTab from 'pages/StatisticsTab/StatisticsTab';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from 'routes/PrivateRoute';
import Loader from './Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefresh } from 'redux/auth/selectors';
import { useEffect } from 'react';
import { refreshThunk } from 'redux/auth/operations';

export const App = () => {
  const dispatch = useDispatch();
  const isRefresh = useSelector(selectIsRefresh);
  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);
  return isRefresh ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegistrationPage />} />

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
