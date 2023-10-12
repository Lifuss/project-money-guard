import Balance from 'components/Balance/Balance';
// import Currency from 'components/Currency/Currency';
import Header from 'components/Header/Header';
import Loader from 'components/Loader/Loader';
import Navigation from 'components/Navigation/Navigation';
import React from 'react';
import { Outlet } from 'react-router-dom';

const DashboardPage = () => {
  return (
    <>
      <div>
        <Header />
        <Navigation />
        {/* <Currency /> дивлячись який адаптив */}
        <Balance />
        <Loader />
      </div>

      <hr />
      <Outlet />
    </>
  );
};

export default DashboardPage;
