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
    width: 715px;
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

  & :nth-child(3) {
    margin-left: -15px;
  }
  & :nth-child(4) {
    margin-left: -30px;
  }
  & :nth-child(5) {
    margin-left: 18px;
  }
  & :nth-child(:not(:last-child)) {
    margin-right: 0;
  }
  @media only screen and (min-width: 768px) {
    gap: 60px;
  }
`;

export const StyledTh = styled.th`
  text-align: center;
  font-size: 16px;
  font-weight: 400;

  color: ${({ theme }) => theme.colors.mainWhite};
`;
export const StyledTbodyTable = styled.tbody`
  display: block;

  max-height: 50vh;
  overflow-y: scroll;
  &::-webkit-scrollbar-thumb {
    background-color: rgba(82, 59, 126, 0.3);
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
  &::-webkit-scrollbar {
    width: 0.5em;
  }
`;

export const StyledTr = styled.tr`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-bottom: ${({ theme }) => theme.border.borderBottom};

  gap: 50px;
`;
export const StyledTd = styled.td`
  min-width: 50px;
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: ${props => props.$color};
`;
export const StyledTdComment = styled(StyledTd)`
  text-align: start;
  flex-shrink: 1;
  flex-basis: 100px;
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
  background: rgba(82, 59, 126, 0.6);
  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
`;
