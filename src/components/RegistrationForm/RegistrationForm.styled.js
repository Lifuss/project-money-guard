import styled from 'styled-components';
import PasswordStrengthBar from 'react-password-strength-bar-with-style-item';

import registrationMobile from '../../images/register-bg/bg-register-mobile.jpg';
import registrationTablet from '../../images/register-bg/bg-register-tablet.jpg';
import registrationDesktop from '../../images/register-bg/bg-register-desktop.jpg';

export const StyledSection = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #1e0646;
  background-image: url(${registrationMobile});
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (min-width: 768px) {
    background-image: url(${registrationTablet});
  }
  @media screen and (min-width: 1280px) {
    background-image: url(${registrationDesktop});
  }
`;

export const StyledForm = styled.form`

  position: relative;
  display: flex;
  width: 533px;
  height: 685px;
  flex-direction: column;
  align-items: center;
  border-radius: 8px; 

  background-color: rgba(255, 255, 255, 0.10);
  backdrop-filter: blur(50px);
  box-shadow: 0px 4px 60px rgba(0, 0, 0, 0.25);
`;

export const StyledPasswordStrengthBar = styled(PasswordStrengthBar)`
  width: 100%; 
`;

