import React from 'react';
import { NavLink } from 'react-router-dom';
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
              <NavLink to="/statistics">
                <svg width="38" height="38">
                  <use href={`${sprite}#statistics`} />
                </svg>
              </NavLink>
            </li>
            <li>
              <NavLink to="/currency">
                <svg width="38" height="38">
                  <use href={`${sprite}#dollar`} />
                </svg>
              </NavLink>
            </li>
          </NavList>
        </nav>
      </NavContainer>
    </>
  );
};

export default Navigation;
