import React from 'react';
import {
  AccountName,
  DividerImg,
  ExitText,
  HeaderInfo,
  LogoBox,
  LogoImg,
  LogoName,
  LogoutBtn,
  StyledHeaderContainer,
} from './Header.styled';
import logoMoneyGuard from '../../images/logo_money_guard.svg';
import exitIcon from '../../images/exit.svg';
import dividerIcon from '../../images/straight_line.svg';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { useMediaQuery } from 'react-responsive';
import { logoutThunk } from 'redux/auth/operations';

const Header = () => {
  const dispatch = useDispatch();
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 768px)',
  });

  const userData = useSelector(selectUser);
  const email = userData?.email || 'name.surname';
  // const email = 'name.surname@gmail.com'; // поки що захардкоджено
  const index = email.indexOf('@');
  const nameFromEmail = email.slice(0, index);

  const handleLogout = () => {
    // alert('Are you sure you want to logout?'); // поки що alert
    console.log('Logout');
    dispatch(logoutThunk());
    // відкрити модалку 'Are you sure you want to logout?'
  };

  return (
    <>
      <header>
        <StyledHeaderContainer>
          <LogoBox>
            <LogoImg src={logoMoneyGuard} alt="logo" />
            <LogoName>Money Guard</LogoName>
          </LogoBox>
          <HeaderInfo>
            <AccountName>{nameFromEmail}</AccountName>
            {isDesktopOrLaptop && (
              <DividerImg src={dividerIcon} alt="divider-icon" />
            )}
            <LogoutBtn onClick={handleLogout}>
              <img src={exitIcon} alt="exit" />
              {isDesktopOrLaptop && <ExitText>Exit</ExitText>}
            </LogoutBtn>
          </HeaderInfo>
        </StyledHeaderContainer>
      </header>
    </>
  );
};

export default Header;
