import * as React from 'react';
import { TaskContext } from '../context/TodoList';

function TodoList() {
  const { tasks } = React.useContext(TaskContext);

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.title}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
