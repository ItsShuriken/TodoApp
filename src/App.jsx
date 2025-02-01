import React, { useState } from "react";
import Login from "./Login";
import AddTodo from "./Content/Body/AddTodo";
import Header from "./Content/Header/Header";
import TodoList from "./Content/Body/TodoList";
import { filterTodos } from "./util/filterLogic";

const App = () => {
  const [isAddTodoModalOpen, setIsAddTodoModalOpen] = useState(false);

  const toggleOpenAddTodoModal = () => {
    setIsAddTodoModalOpen(!isAddTodoModalOpen);
  };

  return (
    <div>
      <Header />
      <Login />
      {/* <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center space-y-4">
        <button
          className="bg-blue-400 text-white rounded-full hover:bg-blue-700 h-12 w-12 flex items-center justify-center"
          onClick={toggleOpenAddTodoModal}
        >
          <span className="text-2xl">+</span>
        </button>
        {isAddTodoModalOpen && <AddTodo isOpen={isAddTodoModalOpen} handleCloseModal={toggleOpenAddTodoModal}/>}
        <TodoList />
      </div> */}
    </div>
  );
};

export default App;
