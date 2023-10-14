import styled from 'styled-components';

export const StyledTitle = styled.h1`
  font-size: 40px;
`;

export const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
`;

export const StyledLink = styled.span`
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.incomeColor};
`;
