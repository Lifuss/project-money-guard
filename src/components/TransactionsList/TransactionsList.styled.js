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
    display: flex;
    flex-direction: column;
  }
`;

export const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const StyledThead = styled.thead``;

export const StyledHeaderTr = styled.tr`
  display: flex;
  align-items: center;
  padding: 16px 20px;
  border-radius: 8px;
  background: ${({ theme }) => theme.backgrounds.tableHead};
  box-shadow: ${({ theme }) => theme.shadows.default};
  backdrop-filter: ${({ theme }) => theme.blur.backdropFilter};
`;
export const StyledThDate = styled.th`
  text-align: right;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: ${({ theme }) => theme.colors.mainWhite};
  margin-right: 60px;
`;
export const StyledThType = styled(StyledThDate)`
  margin-right: 48px;
`;
export const StyledThCategory = styled(StyledThDate)`
  margin-right: 62px;
`;
export const StyledThComment = styled(StyledThDate)`
  margin-right: 97px;
`;
export const StyledThSum = styled(StyledThDate)`
  margin-right: 141px;
`;
export const StyledTbodyTable = styled.tbody`
  @media only screen and (min-width: 320px) and (max-width: 767px) {
    display: none;
    list-style: none;
  }
  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const StyledTr = styled.tr`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  padding: 15px 20px;
  border-bottom: ${({ theme }) => theme.border.borderBottom};
`;

export const StyledTdDate = styled.td`
  text-align: right;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #fbfbfb;
  margin-right: 64px;
`;
export const StyledTdType = styled(StyledTdDate)`
  margin-right: 64px;
`;
export const StyledTdCategory = styled(StyledTdDate)`
  margin-right: 85px;
`;
export const StyledTdComment = styled(StyledTdDate)`
  margin-right: 100px;
`;
export const StyledTdSum = styled(StyledTdDate)`
  margin-right: 40px;
`;
