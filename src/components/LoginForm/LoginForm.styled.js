import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledSection = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #1e0646;
`;

export const StyledLogo = styled.img`
  width: 36px;
`;

export const StyledForm = styled.form`
  position: relative;
  display: flex;
  width: 533px;
  height: 570px;
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
  margin-bottom: 80px;

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

export const StyledTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 97px;

  .logoText {
    font-size: 19px;
    color: white;
  
    @media screen and (min-width: 768px) {
      font-size: 27px;
    }
  }
  @media screen and (min-width: 768px) {
    padding-top: 80px;
  }
`;