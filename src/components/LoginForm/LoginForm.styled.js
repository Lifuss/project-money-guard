import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import loginMobile from '../../images/login-bg/bg-login-mobile.jpg';
import loginTablet from '../../images/login-bg/bg-login-tablet.jpg';
import loginDesktop from '../../images/login-bg/bg-login-web.jpg';

export const StyledSection = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #1e0646;
  background-image: url(${loginMobile});
  background-repeat: no-repeat;
  background-size: cover;
   @media screen and (min-width: 768px) {
    background-image: url(${loginTablet});
  }
  @media screen and (min-width: 1280px) {
    background-image: url(${loginDesktop});
  }
`;

export const LogoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LogoImg = styled.img`
  margin-top: 80px;
  width: 36px;
  height: 36px;
`;

export const LogoName = styled.span`
  color: #fbfbfb;
  font-size: 27px;
`;

export const StyledForm = styled.form`
  position: relative;
  display: flex;
  width: 533px;
  height: 620px;
  flex-direction: column;
  align-items: center;
  borderRadius: 8px;

  background-color: rgba(255, 255, 255, 0.10);
  backdrop-filter: blur(50px);
  box-shadow: 0px 4px 60px rgba(0, 0, 0, 0.25);
`;

export const StyledLink = styled(NavLink)`
  width: 300px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border:  1px solid #4A56E2;
  margin-top: 20px;
  

  font-weight: 400;
  font-size: 18px;
  text-transform: uppercase;
  letter-spacing: 1.80;
  word-wrap: break-word;
  text-align: center;
  cursor: pointer;
  background-color: #ffffff;
  color: #623F8B;

  &:hover {
    font-weight: 600;
  }
`;
