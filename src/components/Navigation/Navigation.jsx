import React from 'react';
import sprite from '../../images/sprite.svg';
import { NavContainer, NavList, StyledNavLink } from './Navigation.styled';

const Navigation = () => {
  return (
    <>
      <NavContainer>
        <nav>
          <NavList>
            <li>
              <StyledNavLink to="/">
                <svg width="38" height="38">
                  <use href={`${sprite}#homepage`} />
                </svg>
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/statistics">
                <svg width="38" height="38">
                  <use href={`${sprite}#statistics`} />
                </svg>
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/currency">
                <svg width="38" height="38">
                  <use href={`${sprite}#dollar`} />
                </svg>
              </StyledNavLink>
            </li>
          </NavList>
        </nav>
      </NavContainer>
    </>
  );
};

export default Navigation;
