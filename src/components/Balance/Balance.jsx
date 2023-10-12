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
      <div>
        <StyledBalanceSupTitle>Your Balance</StyledBalanceSupTitle>
        <StyledBalanceTitle>
          &#8372;{mockBalance.toFixed(2).replace(/(\d)(?=(\d{3})+$)/g, '$1 ')}
        </StyledBalanceTitle>
      </div>
    </StyledBalanceDiv>
  );
};

export default Balance;
