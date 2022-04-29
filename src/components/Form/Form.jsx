import * as React from 'react';
import { TaskContext } from '../../context/TodoList';
import { Action } from '../../context/actions/TodoListAction';
import { Form, Input, TextArea } from './Styled';
import { HandleFormContentContext } from '../../context/FormContent';

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
      <button type="submit">add</button>
      <button type="submit" onClick={handleFormContent}>fechar</button>
    </Form>
  );
}

export default TodoListForm;
