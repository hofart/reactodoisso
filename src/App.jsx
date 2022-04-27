import React from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';
import ContextProvider from './context/TodoList';
import ThemeDefault, { GlobalStyled } from './styles/GlobalStyled';

function App() {
  return (
    <ThemeDefault>
      <ContextProvider>
        <GlobalStyled />
        <h1>Todoisso</h1>
        <Form />
        <TodoList />
      </ContextProvider>
    </ThemeDefault>
  );
}

export default App;
