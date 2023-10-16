import { styled } from 'styled-components';
import { StyledContainer } from 'styles/GlobalStyles';

export const StyledHeaderContainer = styled(StyledContainer)`
  width: 100%;
  padding-top: 12px;
  padding-bottom: 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media only screen and (min-width: 768px) {
    padding-top: 16px;
    padding-bottom: 15px;
  }
`;

export const HeaderInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const LogoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LogoImg = styled.img`
  width: 13px;
  height: 17px;
`;

export const LogoName = styled.span`
  color: ${({ theme }) => theme.colors.mainWhite};
  font-size: 13px;

  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
`;

export const AccountName = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.editBtn};
`;

export const DividerImg = styled.img`
  margin-right: 12px;
  margin-left: 4px;
`;

export const ExitText = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.editBtn};
  margin-left: 8px;
`;

export const LogoutBtn = styled.button`
  padding: 0;
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;
