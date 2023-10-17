import styled from 'styled-components';

export const AddBtnCircle = styled.button`
  width: 44px;
  height: 44px;
  background: ${({ theme }) => theme.backgrounds.btnGradient};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: fixed;
  bottom: 3vh;
  right: 5vw;
  z-index: 1000;
`;
