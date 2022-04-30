import React from 'react';
import ContextProvider from './context/TodoList';
import ThemeDefault from './styles/index';
import { GlobalStyled } from './styles/GlobalStyled';
import Routes from './routes';
import HandleFormProvider from './context/FormContent';

function App() {
  return (
    <ThemeDefault>
      <ContextProvider>
        <HandleFormProvider>
          <GlobalStyled />
          <Routes />
        </HandleFormProvider>
      </ContextProvider>
    </ThemeDefault>
  );
}

export default App;
