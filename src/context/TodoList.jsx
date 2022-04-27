import * as React from 'react';
import { TaskReducer } from '../reducers/TaskReducer';

export const TaskContext = React.createContext();

function Provider({ children }) {
  const [tasks, dispatch] = React.useReducer(TaskReducer, []);

  const value = React.useMemo(() => ({
    tasks, dispatch,
  }), [tasks]);

  return (
    <TaskContext.Provider value={value}>
      {children}
    </TaskContext.Provider>
  );
}

export default Provider;
