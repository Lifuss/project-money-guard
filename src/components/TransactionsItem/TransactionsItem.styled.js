import styled from 'styled-components';

export const StyledTransaction = styled.li`
  margin: 0 auto;
  width: 280px;
  margin-bottom: 8px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
  border-left: 5px solid #ff868d;
`;

export const StyledParWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.41);
`;
export const StyledParagraph = styled.p`
  text-align: right;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #fbfbfb;
`;

export const StyledBtnBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 20px;
`;

export const StyledDeleteBtn = styled.button`
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 4px 12px;

  background: ${({ theme }) => theme.backgrounds.btnGradient};
  border-radius: 18px;
  box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.2);
`;

export const StyledEditBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: 4px 12px;

  background-color: transparent;

  color: var(--white-60, rgba(255, 255, 255, 0.6));
  text-align: center;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.32px;
`;
