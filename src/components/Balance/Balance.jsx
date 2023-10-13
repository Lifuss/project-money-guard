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
    </StyledBalanceDiv>
  );
};

export default Balance;
