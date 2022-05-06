import * as React from 'react';
import { TaskContext } from '../../context/TodoList';
import { Action } from '../../context/actions/TodoListAction';
import { Button } from '../../styles/GlobalStyles';
import {
  List, Box, Icon, Input,
} from './Styles';

function TodoList() {
  const { tasks, dispatch } = React.useContext(TaskContext);

  return (
    <ul>
      {tasks.map((task) => (
        <List key={task.id}>
          <Box align>
            <Input />
            <h4 style={{ fontWeight: 'bold' }}>
              {task.title}
            </h4>
          </Box>
          <Box align>
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
