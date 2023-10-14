import DashboardPage from 'pages/DashboardPage/DashboardPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import RegistrationPage from 'pages/RegistrationPage/RegistrationPage';
// import StatisticsTab from 'pages/StatisticsTab/StatisticsTab';
import PageNotFound from 'pages/PageNotFound/PageNotFound';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from 'routes/PrivateRoute';
import Loader from './Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefresh } from 'redux/auth/selectors';
import { lazy, useEffect } from 'react';
import { refreshThunk } from 'redux/auth/operations';

const CurrencyTab = lazy(() => import('pages/CurrencyTab/CurrencyTab'));
const HomeTab = lazy(() => import('pages/HomeTab/HomeTab'));
const StatisticsTab = lazy(() => import('pages/StatisticsTab/StatisticsTab'));

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
      <Route path="registration" element={<RegistrationPage />} />

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
