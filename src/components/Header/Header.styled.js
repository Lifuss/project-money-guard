import { styled } from 'styled-components';
import { StyledContainer } from 'styles/GlobalStyles';

export const StyledHeaderContainer = styled(StyledContainer)`
  width: 100%;
  padding-top: 12px;
  padding-bottom: 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const HeaderInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const HeaderWrapper = styled.header`
  background: linear-gradient(270deg, #2e1746 3.2%, #2e225f 99.98%);
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

export const OverlayStyle = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: flex-end;
  /* align-items: center; */
  /* margin: 56px, auto; */
  /* bottom: 0; */
  z-index: 1200;
  background: rgba(34, 13, 91, 0.23);
  backdrop-filter: blur(7px);
  transition: opacity 500ms ease-in-out, visibility 500ms ease-in-out;
  opacity: 1;
  visibility: visible;

  @media screen and (min-width: 768px) {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 60px 0px;
  }
`;

export const ModalWindowStyle = styled.div`
  width: 100%;
  min-height: 691px;
  padding: 41px 40px;
  margin: 56px, auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: radial-gradient(#3f2e96, #5f478c);
  border-radius: 8px;
  position: relative;
  bottom: 0;
  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);

  @media screen and (min-width: 768px) {
    width: 533px;
    height: 477px;
  }
`;

export const LogoutImg = styled.img`
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;

  @media screen and (min-width: 768px) {
    width: 36px;
    height: 36px;

  }
`;

export const LogoutName = styled.span`
  color: #fbfbfb;
  font-size: 19px;
  margin-bottom: 40px;

   @media screen and (min-width: 768px) {
    font-size: 27px;
    margin-bottom: 52px;
  }
`;

export const ConfirmationMessage = styled.p`
  font-size: 18px;
  line-height: normal;
  margin-bottom: 40px;
  text-align: center;
  

  @media screen and (min-width: 768px) {
    margin-bottom: 65px;
  }
`;

export const CancelButtonStyle = styled.button`
  width: 319px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border:  1px solid #4A56E2;
  margin: auto;
  box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.20);

  

  font-weight: 400;
  font-size: 18px;
  text-transform: uppercase;
  letter-spacing: 1.80;
  word-wrap: break-word;
  text-align: center;
  cursor: pointer;
  background-color: #ffffff;
  color: #623F8B;

  &:hover {
    font-weight: 600;
  }
`;

export const LogOutButtonStyle = styled.button`
  width: 319px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border:  1px solid #4A56E2;
  margin: auto;
  margin-bottom: 20px;

  font-weight: 400;
  font-size: 18px;
  text-transform: uppercase;
  letter-spacing: 1.80;
  word-wrap: break-word;
  text-align: center;
  cursor: pointer;
  background: linear-gradient(97deg, #FFC727 0%, #9E40BA 61%, #7000FF 91%);
  box-shadow: 1px 9px 15px rgba(0, 0, 0, 0.20);
  border-radius: 20px;

  &:hover {
    font-weight: 600;
  }
`;

export const LogoutLogoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

@media screen and (min-width: 320px) and (max-width: 767px) {
    display: none;
  }
`;