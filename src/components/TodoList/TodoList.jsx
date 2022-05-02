import * as React from 'react';
import { TaskContext } from '../../context/TodoList';
import { Action } from '../../context/actions/TodoListAction';
import { Typography, Button } from '../../styles/GlobalStyles';
import {
  List, Box, Icon,
} from './Styles';

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
            <Button onClick={() => dispatch({
              type: Action.removeTask,
              id: task.id,
            })}
            >
              <Icon />
            </Button>
          </Box>
        </List>
      ))}
    </ul>
  );
}

export default TodoList;
