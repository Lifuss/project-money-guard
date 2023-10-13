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
  justify-content: space-between;
  gap: 65px;
  align-items: center;
  padding: 15px 20px;
  border-bottom: ${({ theme }) => theme.border.borderBottom};
`;
export const StyledTd = styled.td`
  text-align: right;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: ${({ theme }) => theme.colors.mainWhite};
`;
export const StyledTdComment = styled(StyledTd)`
  margin-right: 20px;
  width: 100px;
`;
export const StyledTableBtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
// =================================================================

export const StyledTabletWrapper = styled.div`
  width: 704px;
`;
export const StyledTabletList = styled.ul`
  display: flex;

  align-items: center;
  padding: 16px 20px;
  border-radius: 8px;
  background: ${({ theme }) => theme.backgrounds.tableHead};
  box-shadow: ${({ theme }) => theme.shadows.default};
  backdrop-filter: ${({ theme }) => theme.blur.backdropFilter};
`;

export const StyledTabletDate = styled.li`
  margin-right: 60px;
`;
export const StyledTabletType = styled.li`
  margin-right: 50px;
`;
export const StyledTabletCategory = styled.li`
  margin-right: 60px;
`;
export const StyledTabletComment = styled.li`
  margin-right: 75px;
`;
export const StyledTabletSum = styled.li`
  margin-right: 60px;
`;
