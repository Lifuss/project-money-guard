import React from 'react';
import {
  AccountName,
  DividerImg,
  ExitText,
  HeaderInfo,
  HeaderWrapper,
  LogoBox,
  LogoImg,
  LogoName,
  LogoutBtn,
} from './Header.styled';
import logoMoneyGuard from '../../images/logo_money_guard.svg';
import exitIcon from '../../images/exit.svg';
import dividerIcon from '../../images/straight_line.svg';
// import { useSelector } from 'react-redux';
// import { selectIsLoggedIn, selectUser } from 'redux/auth/selectors';
import { useMediaQuery } from 'react-responsive';

const Header = () => {
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 768px)',
  });

  // const userData = useSelector(selectUser);
  // const email = userData.email;
  const email = 'name.surname@gmail.com'; // поки що захардкоджено
  const index = email.indexOf('@');
  const nameFromEmail = email.slice(0, index);

  const handleLogout = () => {
    alert('Are you sure you want to logout?'); // поки що alert
    // відкрити модалку 'Are you sure you want to logout?'
  };

  return (
    <>
      <HeaderWrapper>
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
      </HeaderWrapper>
    </>
  );
};

export default Header;
