import { Action } from '../actions/TodoListAction';

export const TaskReducer = (state, action) => {
  switch (action.type) {
    case Action.addTask:
      return [...state, action.task];
    case Action.removeTask:
      return state.filter((task) => task.id !== action.id);
    case Action.checkTask:
      return console.log(state, action);
    default:
      return state;
  }
};
