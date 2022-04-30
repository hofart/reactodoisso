import * as React from 'react';
import { TaskContext } from '../../context/TodoList';
import { HandleFormContentContext } from '../../context/FormContent';
import { Action } from '../../context/actions/TodoListAction';
import { Button } from '../../styles/GlobalStyled';
import {
  Form, Input, TextArea, Box,
} from './Styled';

function TodoListForm() {
  const { dispatch } = React.useContext(TaskContext);
  const { setState } = React.useContext(HandleFormContentContext);
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');

  const id = React.useId();

  const handleTask = (e) => {
    e.preventDefault();

    if (!title.trim()) return false;

    dispatch({
      type: Action.addTask,
      task: {
        id: `${id}-${title}`,
        title,
        description,
        done: false,
      },
    });

    setTitle('');
    setDescription('');

    return true;
  };

  const handleFormContent = (e) => {
    e.preventDefault();
    setState(false);
  };

  return (
    <Form onSubmit={handleTask}>
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextArea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Box>
        <Button bgColor type="submit">create task</Button>
        <Button border type="submit" onClick={handleFormContent}>fechar</Button>
      </Box>
    </Form>
  );
}

export default TodoListForm;
