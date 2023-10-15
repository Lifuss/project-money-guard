import styled from 'styled-components';
import { StyledContainer } from 'styles/GlobalStyles';

export const StyledDashBoardContainer = styled(StyledContainer)`
  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    /* gap: 32px; */
    @media only screen and (min-width: 768px) {
      justify-content: space-between;
    }
    @media only screen and (min-width: 1280px) {
      flex-direction: column;
    }
  }
`;

export const StyledDashBoardBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-top: 12px;
  margin-bottom: 32px;
  @media only screen and (min-width: 768px) {
    gap: 28px;
    margin-bottom: 20px;
    margin-top: 0;
  }
`;
