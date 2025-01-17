import React, { useEffect, useState } from 'react';
import AddTodo from './Body/AddTodo';
import Todo from './Body/Todo';
import Header from './Header/Header';
import TodoFilters from './Body/TodoFilters';
import { filterTodos } from './Body/filterLogic';
import { addTodo, fetchTodos, updateTodo } from './DataService/Api';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [sortActive, setSortActive] = useState(false);
  const [filter, setFilter] = useState([]);

  const filteredTodos = filterTodos(todos, filter);


  useEffect(() => {
    const loadTodos = async () => {
      const todos = await fetchTodos();
      console.log(todos);
      setTodos(todos);
    };
    loadTodos();
  }, []);

  const handleAddTodo = async (newTodo) => {
    console.log(newTodo);
    const todo = await addTodo(newTodo);
    setTodos([...todos, todo]);
  };

  const handleCheckboxChange = async (todo) => {
    // Toggle completed state
    const updatedTodo = { ...todo, is_completed: !todo.is_completed };
  
    // Update the local state
    const updatedTodos = [...todos].map((t) => t.id === updatedTodo.id ? updatedTodo : t);
  
    // Sort if active
    if (sortActive) updatedTodos.sort((a, b) => a.is_completed - b.is_completed);
  
    // update the local todo list
    setTodos(updatedTodos);
  
    // send update to server
    const response = await updateTodo(updatedTodo);
    const updatedTodoFromServer = response.data;
  
    // update the local todo list with server response
    setTodos(updatedTodos.map((t) => t.id === updatedTodoFromServer.id ? updatedTodoFromServer : t));
  };

const handleSortToggle = () => {
  setSortActive(!sortActive);
};

  return (
  <div>
    <Header/>
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center space-y-4">
      <AddTodo addTodo={handleAddTodo} />
      <ul className="w-3/4">
        {todos.map((todo) => (
          <li key={todo.id} className="border p-2 my-2 flex items-center">
            <Todo
              todo={todo}
              handleCheckboxChange={handleCheckboxChange}
            />
          </li>
        ))}
      </ul>
    </div>
  </div>
  );
};

export default App;