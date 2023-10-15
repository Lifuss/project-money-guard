import styled from 'styled-components';

export const StyledStatisticDivMain = styled.div`
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

    width: 454px;
    height: 454px;
    border-radius: 901px;
    background: rgba(47, 21, 176, 0.73);
    filter: blur(100px);
    position: absolute;
    left: -90px;
    top: -50px;
  }
  &::before {
    content: '';
    width: 539px;
    height: 539px;
    border-radius: 539px;
    background: rgba(47, 21, 176, 0.73);
    z-index: -1;
    filter: blur(100px);
    position: absolute;
    left: -400px;
    top: 500px;
  }
  @media only screen and (min-width: 768px) {
    display: flex;
    margin: 0;
    justify-content: space-between;
    gap: 32px;
    max-width: 768px;
    height: 720px;
    padding: 20px 16px 0 35px;
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
    &::after {
      left: 300px;
      top: 200px;
      background: linear-gradient(
        220deg,
        rgba(109, 84, 235, 0.6) 28.31%,
        rgba(101, 35, 146, 0.6) 66.76%
      );
      filter: blur(200px);
      width: 893px;
      height: 901px;
    }
  }
  @media only screen and (min-width: 1280px) {
    max-width: 803px;
    height: 827px;
    padding: 32px 16px 40px 69px;
    padding: 20px 16px 0 35px;
  }
`;
export const StyledStatisticDivChart = styled.div`
  position: relative;
  width: 280px;
  padding: 16px;
  &::after {
    content: '';
    width: 362.381px;
    height: 362.381px;
    top: 500px;
    left: 170px;
    position: absolute;
    border-radius: 362.381px;
    background: linear-gradient(220deg, #6d54eb 28.31%, #652392 66.76%);

    filter: blur(200px);
  }
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
export const StyledStatisticTitle = styled.h2`
  color: ${({ theme }) => theme.colors.mainWhite};
  text-align: left;
  font-size: 30px;
  font-weight: 400;
  max-width: 280px;
`;
