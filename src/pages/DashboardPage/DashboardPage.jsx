import Balance from 'components/Balance/Balance';
// import Currency from 'components/Currency/Currency';
import Header from 'components/Header/Header';
// import Loader from 'components/Loader/Loader';
import Navigation from 'components/Navigation/Navigation';
import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { StyledContainer } from 'styles/GlobalStyles';
import Currency from 'components/Currency/Currency';
import { useMediaQuery } from 'react-responsive';

const DashboardPage = () => {
  const isTable = useMediaQuery({ query: '(min-width: 768px)' });
  return (
    <>
      <Header />
      <StyledDashBoardContainer>
        <StyledDashBoardBox>
          <Navigation />
          <Balance />
        </StyledDashBoardBox>
        {isTable && <Currency />}
      </StyledDashBoardContainer>
      {/* <Loader /> */}

      <Outlet />
    </>
  );
};
export const StyledDashBoardContainer = styled(StyledContainer)`
  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    gap: 32px;
  }
`;

export const StyledDashBoardBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-top: 12px;
  margin-bottom: 32px;
  @media only screen and (min-width: 768px) {
    gap: 28px;
    margin-bottom: 20px;
    margin-top: 0;
  }
`;
export default DashboardPage;
