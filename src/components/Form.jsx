import * as React from 'react';
import { TaskContext, Action } from '../context/TodoList';

function Form() {
  const { dispatch } = React.useContext(TaskContext);
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');

  const handleTask = (e) => {
    e.preventDefault();

    if (!title.trim()) return false;

    dispatch({
      type: Action.addTask,
      task: {
        id: Math.floor(Math.random() * 9999),
        title,
        description,
        done: false,
      },
    });

    setTitle('');
    setDescription('');

    return true;
  };

  return (
    <form onSubmit={handleTask}>
      <input
        type="text"
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">add</button>
    </form>
  );
}

export default Form;
