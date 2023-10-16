import styled, { createGlobalStyle } from 'styled-components';
import fontRegular from '../fonts/Poppins-Regular.ttf';
import fontBold from '../fonts/Poppins-Bold.ttf';
import fontSemiBold from '../fonts/Poppins-SemiBold.ttf';

export const GlobalStyles = createGlobalStyle`
 
 @font-face {
  font-family: 'Poppins';
  font-weight: 400 600 700;
  src: url(${fontRegular}),url(${fontSemiBold}), url(${fontBold}) ;
}
body{
font-family: 'Poppins', sans-serif;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

body {
  margin: 0;
  padding: 0;
}

p:last-child {
  margin-bottom: 0;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  color: currentColor;
  text-decoration: none;
}

button {
  cursor: pointer;
  border: none;
  color: inherit;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}


body {
    background: ${({ theme }) => theme.backgrounds.backgroundGradient};
    color: ${({ theme }) => theme.colors.mainWhite};
    @media only screen and (max-width: 767px) {
    /* &::after {
    content: '';
    width: 30%;
    height: 362.381px;
    bottom: -90px;
    left: 230px;
    z-index: -1;
    position: sticky;
    border-radius: 362.381px;
    background: linear-gradient(220deg, #6d54eb 28.31%, #652392 66.76%);

    filter: blur(150px);}
  } */}
}
 
`;

export const StyledContainer = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;

  overflow: hidden;
  margin-right: auto;
  min-width: 320px;
  max-width: 425px;

  @media only screen and (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
    max-width: 1279px;
  }
  @media only screen and (min-width: 1280px) {
    padding-left: 16px;
    padding-right: 16px;
    width: 1280px;
  }
  @media only screen and (max-width: 767px) {
    &::after {
      content: '';
      z-index: -1;
      width: 100%;
      height: 454px;
      border-radius: 901px;
      background: rgba(93, 44, 214, 40%);
      filter: blur(100px);
      position: fixed;
      left: -250px;
      top: 20px;
    }

    &::before {
      content: '';
      width: 100%;
      z-index: -1;
      height: 539px;
      border-radius: 539px;
      background: rgba(47, 21, 176, 0.73);
      z-index: -1;
      filter: blur(100px);
      position: fixed;
      left: -400px;
      top: 700px;
    }
  }
  @media only screen and (min-width: 768px) {
    &::before {
      content: '';
      width: 90%;
      height: 201px;
      border-radius: 366.105px;
      background: #302e8e;
      z-index: -1;
      filter: blur(150px);
      position: absolute;
      right: 30px;
      top: 150px;
    }
  }
  @media only screen and (min-width: 1280px) {
    &::before {
      left: 400px;
      width: 50px;
      height: 501px;
      top: 200px;
      filter: blur(100px);
    }
  }
`;
