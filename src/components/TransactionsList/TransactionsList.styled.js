import styled from 'styled-components';

// ==============Mobile==================

export const StyledTransactionsList = styled.div`
  margin: 0 auto;
  @media only screen and (min-width: 1280px) {
    margin-top: 46px;
  }
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
    width: 100%;
  }
  @media only screen and (min-width: 1280px) {
    width: fit-content;
    margin-left: 55px;
  }
`;
export const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
`;
export const StyledHeaderTr = styled.tr`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 16px 20px;

  border-radius: 8px;
  background-color: ${({ theme }) => theme.backgrounds.tableHead};
  box-shadow: ${({ theme }) => theme.shadows.default};
  backdrop-filter: ${({ theme }) => theme.blur.backdropFilter};

  @media only screen and (min-width: 768px) {
    padding-right: calc(100% / 4.2);
  }
  @media only screen and (min-width: 1280px) {
    padding-right: calc(100% / 4.05);
  }
`;

export const StyledTh = styled.th`
  text-align: center;
  font-size: 16px;
  font-weight: 400;

  color: ${({ theme }) => theme.colors.mainWhite};
`;

export const StyledThSortActive = styled(StyledTh)`
  cursor: pointer;
`;

export const StyledSortIcon = styled.svg`
  margin-left: 6px;
  transition: transform 0.3s ease;
  transform: rotate(180deg);
`;
export const StyledTbodyTable = styled.tbody`
  display: block;

  max-height: 50vh;
  overflow-y: scroll;
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.backgrounds.bgScrollBar};
  }
  &::-webkit-scrollbar-track {
    box-shadow: ${({ theme }) => theme.shadows.scrollbarShadow};
  }
  &::-webkit-scrollbar {
    width: 0.5em;
  }

  @media only screen and (min-width: 1280px) {
    max-height: 70vh;
  }
`;

export const StyledTr = styled.tr`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 10px 12px 20px;
  border-bottom: ${({ theme }) => theme.border.borderBottom};

  gap: 50px;
`;
export const StyledTd = styled.td`
  width: 50px;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  color: ${props => props.$color};
`;
export const StyledTdComment = styled(StyledTd)`
  flex-basis: 182px;
`;
export const StyledTableBtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledNoFound = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 80px;

  padding: 30px;
  width: 600px;
  height: 200px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.backgrounds.tableHead};
  box-shadow: ${({ theme }) => theme.shadows.default};
`;
