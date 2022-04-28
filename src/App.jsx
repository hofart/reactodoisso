import React from 'react';
import ContextProvider from './context/TodoList';
import ThemeDefault from './styles/index';
import { GlobalStyled } from './styles/GlobalStyled';
import Routes from './routes';

function App() {
  return (
    <ThemeDefault>
      <ContextProvider>
        <GlobalStyled />
        <Routes />
      </ContextProvider>
    </ThemeDefault>
  );
}

export default App;
