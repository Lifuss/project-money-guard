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
  margin-bottom: 20px;
  position: fixed;
  bottom: 3vh;
  right: 5vw;
  z-index: 1000;
  transition: filter 0.3s;
  &:hover {
    filter: drop-shadow(0px 3px 10px rgba(255, 255, 255, 0.6));
  }
`;
