import React, { useEffect, useState, useContext } from "react";
import AddTodo from "./Content/Body/AddTodo";
import Header from "./Content/Header/Header";
import TodoList from "./Content/Body/TodoList";
import { TodoProvider, TodoContext } from "./DataService/TodoContext";
import { fetchTodosRequest } from "./DataService/Api";
import { filterTodos } from "./util/filterLogic";

const App = () => {
  const { todos, updateTodo, deleteTodo, addTodo, setTodos } = useContext(TodoContext);

  useEffect(() => {
    fetchTodosRequest().then((response) => {
      setTodos(response.data);
    });
  }, []);

  // const [sortActive, setSortActive] = useState(false);
  // const [filter, setFilter] = useState([]);

  // const filteredTodos = filterTodos(todos, filter);

  const handleAddTodo = async (newTodo) => {
    console.log(newTodo);
    const todo = await addTodo(newTodo);
  };

  // const handleSortToggle = () => {
  //   setSortActive(!sortActive);
  // };

  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center space-y-4">
        <AddTodo addTodo={handleAddTodo} />
        <TodoList />
      </div>
    </div>
  );
};

export default App;
