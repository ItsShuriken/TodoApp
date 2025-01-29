import { createContext } from 'react';

const TodoListContext = createContext({
  todos: [],
  handleAddTodo: () => {},
  handleDeleteTodo: () => {},
  handleUpdateTodo: () => {},
});

export {TodoListContext};