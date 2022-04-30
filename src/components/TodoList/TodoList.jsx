import * as React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { TaskContext } from '../../context/TodoList';
import { Action } from '../../context/actions/TodoListAction';
import { Typography } from '../../styles/GlobalStyled';
import { List, Box } from './Styled';

function TodoList() {
  const { tasks, dispatch } = React.useContext(TaskContext);

  return (
    <ul>
      {tasks.map((task) => (
        <List key={task.id}>
          <Box>
            <input type="checkbox" name="" id="" />
            <Typography>{task.title}</Typography>
          </Box>
          <Box>
            <FaRegTrashAlt
              onClick={() => dispatch({
                type: Action.removeTask,
                id: task.id,
              })}
            />
          </Box>
        </List>
      ))}
    </ul>
  );
}

export default TodoList;
