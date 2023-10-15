import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

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
  display: flex;
  justify-content: center;
  align-items: center;

  &.active {
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
