import styled from 'styled-components';
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

// export const PasswordStrengthBarStyle = styled.div`
//   color: yellow;
// `;
