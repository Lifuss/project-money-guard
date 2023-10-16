import React, { useState } from 'react';
import {
  AccountName,
  DividerImg,
  ExitText,
  HeaderInfo,
  LogoBox,
  LogoImg,
  LogoName,
  LogoutBtn,
  LogoutImg,
  LogoutName,
  OverlayStyle,
  ModalWindowStyle,
  ConfirmationMessage,
  LogOutButtonStyle,
  CancelButtonStyle,
  LogoutLogoBox,
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

  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);

  const handleLogout = () => {
    setShowLogoutConfirmation(true);
  };
  const confirmLogout = () => {
    dispatch(logoutThunk());
    setShowLogoutConfirmation(false);
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

{showLogoutConfirmation && (
  <OverlayStyle>
          <ModalWindowStyle>
             <LogoutLogoBox>
            <LogoutImg src={logoMoneyGuard} alt="logo" />
            <LogoutName>Money Guard</LogoutName>
          </LogoutLogoBox>
      <ConfirmationMessage><p>Are you sure you want to logout?</p></ConfirmationMessage>
            <div>
              <LogOutButtonStyle onClick={confirmLogout}>Logout</LogOutButtonStyle>
        <CancelButtonStyle onClick={() => setShowLogoutConfirmation(false)}>
          Cancel
        </CancelButtonStyle>
      </div>
    </ModalWindowStyle>
  </OverlayStyle>
)}
    </>
  );
};

export default Header;
