import * as React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import dark from './themes/default';

export const GlobalStyled = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100;0,400;0,700;1,100;1,400;1,700&display=swap');

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    background-color: ${(props) => props.theme.dark.colors.black100};
  }

  body {
    width: min(100% - 2rem, 600px);
    margin-inline: auto;
  }

  h1, h2, h3, h4, h5, h6, p, span {
    font-family: ${(props) => props.theme.dark.fonts.primary};
  }
`;

function ThemeDefault({ children }) {
  return (
    <ThemeProvider theme={dark}>{children}</ThemeProvider>
  );
}

export default ThemeDefault;
