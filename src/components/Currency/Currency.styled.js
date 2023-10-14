import styled from 'styled-components';

export const StyledTableWrapper = styled.div`
  position: relative;
  background-color: rgba(74, 86, 226, 0.1);
  width: 320px;
`;

export const StyledGraphWrapper = styled.div`
  position: relative;
  background-color: rgba(74, 86, 226, 0.1);

  top: -6px;
`;

export const StyledTable = styled.table`
  width: 320px;
  font-size: 16px;
  line-height: normal;
  border-collapse: collapse;
  padding-left: 20px;
`;
export const StyledThead = styled.thead`
  background: rgba(255, 255, 255, 0.2);
  font-weight: 600;
`;

export const StyledTh = styled.th`
  padding-top: 13px;
  padding-bottom: 13px;
  width: 33%;
  padding-left: 20px;
`;

export const StyledTd = styled.td`
  padding-top: 8px;
  padding-bottom: 8px;
  width: 30%;
  padding-left: 25px;
  &:last-child {
    padding-left: 46px;
  }
`;

export const StyledWave = styled.svg`
  position: absolute;
`;
export const StyledGradientWave = styled.svg`
  position: absolute;
  top: 6px;
`;
