import * as React from 'react';
import FormStatusMessage from '../FormStatusMessage/FormStatusMessage';
import { TaskContext } from '../../context/TodoList';
import { HandleFormContentContext } from '../../context/FormContent';
import { Action } from '../../context/actions/TodoListAction';
import { Button } from '../../styles/GlobalStyles';
import {
  Form, Input, TextArea, Box,
} from './Styles';

function TodoListForm() {
  const id = React.useId();
  const { dispatch } = React.useContext(TaskContext);
  const { setState } = React.useContext(HandleFormContentContext);
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [formStatus, setFormStatus] = React.useState({
    type: '',
    message: '',
  });

  const handleTask = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      return setFormStatus({
        type: 'error',
        message: 'Ajeita essa peste!',
      });
    }

    dispatch({
      type: Action.addTask,
      task: {
        id: `${id}-${parseInt(Math.random() * 9999, 9)}`,
        title,
        description,
        isChecked: false,
      },
    });

    setFormStatus({
      type: 'success',
      message: 'Certim!',
    });

    setTitle('');
    setDescription('');

    return true;
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
        <Button bgColor padding>
          create task
        </Button>
        <Button border padding onClick={() => setState(false)}>
          cancel
        </Button>
      </Box>
      {formStatus.type === 'error' ? <FormStatusMessage /> : null}
    </Form>
  );
}

export default TodoListForm;
