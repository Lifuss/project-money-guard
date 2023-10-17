import styled from 'styled-components';

export const StyledTransaction = styled.li`
  margin: 0 auto;
  min-width: 280px;
  max-width: 360px;
  margin-bottom: 8px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.backgrounds.transactionBg};
  border-left: 5px solid ${props => props.$color};

  @media only screen and (min-width: 320px) and (max-width: 767px) {
    display: block;
    list-style: none;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const StyledParWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  border-bottom: ${({ theme }) => theme.border.borderBottom};
`;
export const StyledParagraph = styled.p`
  text-align: right;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  color: ${({ theme }) => theme.colors.mainWhite};
`;

export const StyledSpan = styled.span`
  max-width: 120px;
`;
export const StyledBtnBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 20px;
`;

export const StyledDeleteBtn = styled.button`
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  padding: 4px 12px;

  border-radius: 18px;
  background: ${({ theme }) => theme.backgrounds.btnGradient};
  box-shadow: ${({ theme }) => theme.shadows.deleteBtnShadow};
  transition: filter 0.3s;
  &:hover {
    filter: drop-shadow(0px 3px 10px rgba(255, 255, 255, 0.6));
  }
`;

export const StyledEditBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: 4px 12px;

  text-align: center;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.32px;

  background-color: transparent;
  color: ${({ theme }) => theme.colors.editBtn};
  transition: filter 0.3s;
  &:hover {
    filter: drop-shadow(0px 3px 5px rgba(255, 255, 255, 0.8));
  }
`;

export const StyledTansNotFound = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  margin-top: 80px;

  padding: 30px;
  width: 260px;
  height: 100px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.backgrounds.tableHead};
  box-shadow: ${({ theme }) => theme.shadows.default};
`;

export const StyledNotFoundTitle = styled.h3`
  text-align: center;
`;
