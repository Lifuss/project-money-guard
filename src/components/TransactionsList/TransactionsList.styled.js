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
    /* justify-content: space-between;
    align-items: center; */
  }
`;

export const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const StyledThead = styled.thead`
  /* border-radius: 8px;
  background: rgba(82, 59, 126, 0.6);
  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(50px); */
`;

export const StyledHeaderTr = styled.tr`
  display: flex;
  align-items: center;
  padding: 16px 20px;
  border-radius: 8px;
  background: rgba(82, 59, 126, 0.6);
  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(50px);
`;

export const StyledTh = styled.th`
  text-align: right;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #fbfbfb;
`;
export const StyledThDate = styled.th`
  text-align: right;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #fbfbfb;
  margin-right: 60px;
`;
export const StyledThType = styled.th`
  text-align: right;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #fbfbfb;
  margin-right: 48px;
`;
export const StyledThCategory = styled.th`
  text-align: right;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #fbfbfb;
  margin-right: 62px;
`;
export const StyledThComment = styled.th`
  text-align: right;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #fbfbfb;
  margin-right: 97px;
`;
export const StyledThSum = styled.th`
  text-align: right;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #fbfbfb;
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
  align-items: center;
  padding: 15px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.41);
`;
export const StyledTd = styled.td`
  text-align: right;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #fbfbfb;
`;
