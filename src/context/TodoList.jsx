import * as React from 'react';

export const Action = {
  addTask: 'add',
};

export const taskReducer = (state, action) => {
  switch (action.type) {
    case Action.addTask:
      return [...state, action.task];
    default:
      return state;
  }
};

export const TaskContext = React.createContext();

function Provider({ children }) {
  const [tasks, dispatch] = React.useReducer(taskReducer, []);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}

export default Provider;
