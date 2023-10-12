import CurrencyTab from 'pages/CurrencyTab';
import DashboardPage from 'pages/DashboardPage';
import HomeTab from 'pages/HomeTab';
import PageNotFound from 'pages/PageNotFound';
import StatisticsTab from 'pages/StatisticsTab';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />}>
        <Route index element={<HomeTab />} />
        <Route path="statistics" element={<StatisticsTab />} />
        <Route path="currency" element={<CurrencyTab />} />
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
