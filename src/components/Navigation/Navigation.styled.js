import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const NavContainer = styled.nav`
  padding: 12px 42px;
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 32px;
  align-items: center;
  justify-content: center;
`;

export const StyledNavLink = styled(NavLink)`
  align-items: center;
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
`;
