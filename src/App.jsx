import React from "react";
import AddTodo from "./Content/Body/AddTodo";
import Header from "./Content/Header/Header";
import TodoList from "./Content/Body/TodoList";
import { filterTodos } from "./util/filterLogic";

const App = () => {
  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center space-y-4">
        <AddTodo />
        <TodoList />
      </div>
    </div>
  );
};

export default App;
