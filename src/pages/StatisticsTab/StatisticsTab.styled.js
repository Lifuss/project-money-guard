import styled from 'styled-components';

export const StatisticDivMain = styled.div`
  background: ${({ theme }) => theme.backgrounds.background};
  color: white;
  width: 803px;
  height: 827px;
  position: relative;
  &::after {
    content: '';
    width: 893px;
    height: 901px;
    border-radius: 901px;
    background: linear-gradient(
      220deg,
      rgba(109, 84, 235, 0.6) 28.31%,
      rgba(101, 35, 146, 0.6) 66.76%
    );
    filter: blur(200px);
    position: absolute;
    left: 300px;
    top: 200px;
  }
  &::before {
    content: '';
    width: 893px;
    height: 901px;
    border-radius: 366.105px;
    background: #302e8e;

    filter: blur(150px);
    position: absolute;
    left: 650px;
    bottom: 500px;
  }
`;
export const StatisticDivChart = styled.div`
  position: relative;
  &::after {
    content: '';
    width: 330px;
    height: 333px;
    border-radius: 333px;
    background: #6d1c77;
    position: absolute;
    left: 200px;
    bottom: 0;

    filter: blur(150px);
  }
`;
export const StatisticTitle = styled.h2`
  color: ${({ theme }) => theme.colors.mainWhite};
  text-align: left;
  font-size: 30px;
  font-weight: 400;
`;
