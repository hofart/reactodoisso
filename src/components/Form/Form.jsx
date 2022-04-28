import * as React from 'react';
import { TaskContext } from '../../context/TodoList';
import { Action } from '../../context/actions/TodoListAction';

function Form() {
  const { dispatch } = React.useContext(TaskContext);
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

  return (
    <form onSubmit={handleTask}>
      <input
        type="text"
        placeholder="title"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="description"
        name="content"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit" name="send">add</button>
    </form>
  );
}

export default Form;
