import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const NavContainer = styled.nav`
  padding: 12px 42px;
  outline: 1px solid white;

  @media only screen and (min-width: 768px) {
    padding-top: 40px;
    padding-bottom: 28px;
  }
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 32px;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 768px) {
    flex-direction: column;
    align-items: baseline;
    gap: 12px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  /* align-items: center; */
  width: 38px;
  height: 38px;
  &.active {
    /* color: #4a56e2; */
    color: ${({ theme }) => theme.backgrounds.activeNavBtn};
    border-radius: 3px;
  }
  & svg {
    fill: currentColor;
  }

  @media only screen and (min-width: 768px) {
    & svg {
      width: 24px;
      height: 24px;
    }
  }
`;

export const StyledNavText = styled.span`
  /* color: #fbfbfb; */
  color: ${({ theme }) => theme.colors.mainWhite};
  font-size: 18px;
  margin-left: 20px;
`;
