import * as React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { TaskContext } from '../context/TodoList';
import { Action } from '../actions/TodoListAction';

function TodoList() {
  const { tasks, dispatch } = React.useContext(TaskContext);

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id} id={task.id}>
          <div>{task.title}</div>
          <div>
            <FaRegTrashAlt
              onClick={() => dispatch({
                type: Action.removeTask,
                id: task.id,
              })}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
