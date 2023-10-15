import styled from 'styled-components';

export const Button = styled.div`
  opacity: ${props => props.$opacity};
  position: fixed;
  /* width: 50px; */
  /* height: 100px; */
  /* border-radius: 50%; */
  left: 50%;
  bottom: 40px;
  height: 20px;
  font-size: 3rem;
  z-index: 100;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.4);
  transition: all 0.3s;
  &:hover {
    color: rgba(255, 255, 255, 0.8);
  }
`;
