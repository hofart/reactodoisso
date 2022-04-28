import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import dark from './themes/default';

function ThemeDefault({ children }) {
  return (
    <ThemeProvider theme={dark}>{children}</ThemeProvider>
  );
}

export default ThemeDefault;
