import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
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
    color: ${({ theme }) => theme.colors.mainWhite}  }

    
`;

export const StyledContainer = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
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
`;
