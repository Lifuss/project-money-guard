import styled from 'styled-components';

// ==============Mobile==================

export const StyledTransactionsList = styled.div`
  margin: 0 auto;
`;

export const StyledMobileWrapper = styled.ul`
  @media only screen and (min-width: 320px) and (max-width: 767px) {
    display: block;
    list-style: none;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
// ==============Table==================
export const StyledTableWrapper = styled.div`
  display: none;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const StyledTable = styled.table`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const StyledThead = styled.thead`
  border-radius: 8px;
  background: rgba(82, 59, 126, 0.6);
  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(50px);
`;
export const StyledTh = styled.th``;

export const StyledTbodyTable = styled.tbody`
  @media only screen and (min-width: 320px) and (max-width: 767px) {
    display: none;
    list-style: none;
  }
  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const StyledTd = styled.td``;
