import { styled } from 'styled-components';

export const HeaderInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const HeaderWrapper = styled.header`
  width: 100%;
  padding: 12px 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
  color: #fbfbfb;
  font-size: 13px;
`;

export const AccountName = styled.p`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.6);
`;

export const DividerImg = styled.img`
  margin-right: 12px;
  margin-left: 4px;
`;

export const ExitText = styled.p`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.6);
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
