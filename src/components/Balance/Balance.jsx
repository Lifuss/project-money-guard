import React from 'react';
import {
  StyledBalanceDiv,
  StyledBalanceSupTitle,
  StyledBalanceTitle,
} from './Balance.styled';

const Balance = () => {
  const mockBalance = 24000;
  return (
    <StyledBalanceDiv>
      <StyledBalanceSupTitle>Your Balance</StyledBalanceSupTitle>
      <StyledBalanceTitle>&#8372;{mockBalance.toFixed(2)}</StyledBalanceTitle>
      <svg width="20" height="20">
        <use href="../../images/sprite.svg#edit"></use>
      </svg>
    </StyledBalanceDiv>
  );
};

export default Balance;
