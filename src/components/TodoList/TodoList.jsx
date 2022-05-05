import * as React from 'react';
import { TaskContext } from '../../context/TodoList';
import { Action } from '../../context/actions/TodoListAction';
import { Button } from '../../styles/GlobalStyles';
import {
  List, Box, Icon, Input,
} from './Styles';

function TodoList() {
  const { tasks, dispatch } = React.useContext(TaskContext);

  const onChecked = (task, id, isChecked) => {
    console.log(id, isChecked);
  };

  console.log(tasks);

  return (
    <ul>
      {tasks.map((task) => (
        <List key={task.id}>
          <Box align>
            <Input onClick={() => onChecked(task, task.id, !task.isChecked)} />
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
