import styled from 'styled-components';
export const TableTd = styled.td`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  font-size: 14px;
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
  margin-top: 20px;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 600;
  max-width: 395px;
  max-height: 56px;
  border-radius: 8px;
  background: rgba(82, 59, 126, 0.6);

  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(50px);
`;
export const TableTh = styled.th`
  /* padding: 16px; */
  display: inline-block;
`;
export const TableH3 = styled.h3`
  margin-top: 200px;
  font-size: 20px;
  text-align: center;
  line-height: normal;
`;
export const TableBody = styled.tbody`
  /* padding: 16px; */
  display: flex;
  flex-direction: column;
  height: 490px;
  width: 395px;
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
