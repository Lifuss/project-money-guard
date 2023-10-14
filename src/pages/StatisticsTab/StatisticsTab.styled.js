import styled from 'styled-components';

export const StatisticDivMain = styled.div`
  color: white;
  display: block;
  position: relative;
  overflow: hidden;
  min-width: 325px;
  max-width: 375px;
  margin: 0 auto;
  padding: 0 20px;

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
  @media only screen and (min-width: 768px) {
    display: flex;
    margin: 0;
    justify-content: space-between;
    gap: 32px;
    max-width: 768px;
    height: 720px;
    padding: 20px 16px 0 35px;
  }
  @media only screen and (min-width: 1280px) {
    max-width: 803px;
    height: 827px;
    padding: 32px 16px 40px 69px;
    padding: 20px 16px 0 35px;
  }
`;
export const StatisticDivChart = styled.div`
  position: relative;
  width: 280px;
  padding: 16px;

  @media only screen and (min-width: 768px) {
    width: 336px;
    padding: 0;
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
  }
  @media only screen and (min-width: 1280px) {
    width: 288px;
  }
`;
export const StatisticTitle = styled.h2`
  color: ${({ theme }) => theme.colors.mainWhite};
  text-align: left;
  font-size: 30px;
  font-weight: 400;
  max-width: 280px;
`;
