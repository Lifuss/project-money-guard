import React from 'react';
import sprite from '../../images/sprite.svg';
import { NavList, StyledNavLink, StyledNavText } from './Navigation.styled';
import { useMediaQuery } from 'react-responsive';

const Navigation = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 768px)',
  });
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });
  return (
    <>
      <nav>
        <NavList>
          <li>
            <StyledNavLink to="/">
              <svg width="38" height="38">
                <use href={`${sprite}#homepage`} />
              </svg>
              {isDesktopOrLaptop && <StyledNavText>Home</StyledNavText>}
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/statistics">
              <svg width="38" height="38">
                <use href={`${sprite}#statistics`} />
              </svg>
              {isDesktopOrLaptop && <StyledNavText>Statistics</StyledNavText>}
            </StyledNavLink>
          </li>
          {isMobile ? (
            <li>
              <StyledNavLink to="/currency">
                <svg width="38" height="38">
                  <use href={`${sprite}#dollar`} />
                </svg>
              </StyledNavLink>
            </li>
          ) : null}
        </NavList>
      </nav>
    </>
  );
};

export default Navigation;
