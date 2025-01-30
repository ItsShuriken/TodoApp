import { useEffect, useState, useContext, createContext} from 'react';
import api from './axiosInstance';

export const TodoListContext = createContext();

export const TodoListProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await api.get('/api/todos');
        setTodos(response.data);
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };    
    fetchTodos();
  }, []);

  const handleAddTodo = async (newTodo) => {
    try {
      const response = await api.post('/api/todos', newTodo);
      setTodos((prevTodos) => [...prevTodos, response.data]);
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  const handleDeleteTodo = async (todo) => {
    try {
      await api.delete(`/api/todos/${todo.id}`);
      setTodos((prevTodos) => prevTodos.filter((t) => t.id !== todo.id));
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  const handleUpdateTodo = async (todo) => {
    try {
      const response = await api.put(`/api/todos/${todo.id}`, todo);
      setTodos((prevTodos) =>
        prevTodos.map((t) => (t.id === todo.id ? todo : t))
      );    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  return (
    <TodoListContext.Provider value={{ todos, handleAddTodo, handleDeleteTodo, handleUpdateTodo }}>
      {children}
    </TodoListContext.Provider>
  );
};