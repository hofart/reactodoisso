import React from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';
import Provider from './context/TodoList';

function App() {
  return (
    <Provider>
      <h1>Todoisso</h1>
      <Form />
      <TodoList />
    </Provider>
  );
}

export default App;
