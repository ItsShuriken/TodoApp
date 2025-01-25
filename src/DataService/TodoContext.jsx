// TodoContext.js
import { createContext, useEffect, useState } from 'react';
import { updateTodoRequest, fetchTodosRequest, deleteTodoRequest, addTodoRequest } from '../DataService/Api';
import { v4 as uuidv4 } from 'uuid';

const TodoContext = createContext();

const TodoProvider = ({ children }) => {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [todos, setTodos] = useState([]);

  const updateTodo = async (updatedTodo) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === updatedTodo.id ? { ...todo, ...updatedTodo } : todo
      )
    );
    try {
      const response = await updateTodoRequest(updatedTodo);
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  const deleteTodo = async (deletedTodo) => {
    setTodos((prevTodos) => prevTodos.filter((t) => t.id !== todo.id));
    try {
      const response = await deleteTodoRequest(deletedTodo);
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  const addTodo = async (newTodo) => {
    const tempId = uuidv4();
    setTodos((prevTodos) => [...prevTodos, {...newTodo, id: tempId}]);

    try {
      const response = await addTodoRequest(newTodo);
      if (response.status === 201) {
        const { data } = response;
        setTodos((prevTodos) =>
          prevTodos.map((todo) =>
            todo.id === tempId ? { ...newTodo, ...data } : todo
          )
        );
      }
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  return (
    <TodoContext.Provider 
    value={{ 
      todos, 
      updateTodo, 
      deleteTodo, 
      addTodo, 
      setTodos
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export { TodoProvider, TodoContext };