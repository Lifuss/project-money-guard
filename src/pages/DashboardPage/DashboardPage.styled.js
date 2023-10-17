import styled from 'styled-components';
import { StyledContainer } from 'styles/GlobalStyles';

export const StyledDashBoardContainer = styled(StyledContainer)`
  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    padding: 0;
    justify-content: space-between;
    margin-bottom: 20px;
    @media only screen and (min-width: 1280px) {
      flex-direction: column;
      max-width: 480px;
      padding: 0;
      margin: 0;
      justify-content: space-between;
      gap: 32px;
      border-right: 1px solid ${({ theme }) => theme.colors.subColor};
    }
  }
`;

export const StyledDashBoardBox = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  gap: 12px;
  margin-top: 12px;
  margin-bottom: 32px;
  @media only screen and (min-width: 768px) {
    gap: 28px;
    margin-bottom: 0;
    margin-top: 40px;
    align-items: baseline;
  }
`;

export const StyledDeskContainer = styled(StyledContainer)`
  @media only screen and (min-width: 1280px) {
    display: grid;
    grid-template-columns: 480px auto;
    padding-left: 16px;
    padding-right: 16px;
    gap: 69px;
  }
`;
