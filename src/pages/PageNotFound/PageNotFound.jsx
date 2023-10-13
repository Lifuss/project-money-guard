import React from 'react';
import { Link } from 'react-router-dom';
import { StyledBox, StyledLink, StyledTitle } from './PageNotFound.styled';

const PageNotFound = () => {
  return (
    <StyledBox>
      <StyledTitle>Page is not found</StyledTitle>
      <Link to={'/'}>
        Go <StyledLink>home</StyledLink>
      </Link>
    </StyledBox>
  );
};

export default PageNotFound;
