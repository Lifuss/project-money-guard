import styled from 'styled-components';
export const TableTd = styled.td`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  /* padding: 17px 20px; */
  width: 395px;
`;
export const TableTr = styled.tr`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.41);
  padding: 16px;
`;
export const TableTrHead = styled.tr`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.41);
  padding: 16px;
  background: rgba(82, 59, 126, 0.6);
`;
export const TableTh = styled.th`
  /* padding: 16px; */
  display: inline-block;
`;
