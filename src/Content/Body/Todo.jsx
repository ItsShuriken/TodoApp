import React, { useState, useContext } from 'react';
import DeleteModal from './DeleteModal';
import DetailModal from './DetailModal';
import { TodoListContextWrapper } from '../../DataService/TodoListContextWrapper';

function Todo({ todo }) {
  const { todos, handleUpdateTodo } = useContext(TodoListContextWrapper);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleCheckboxChange = async (todo) => {
    const updatedTodo = { ...todo, is_completed: !todo.is_completed };
    try {
      await handleUpdateTodo(updatedTodo);
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  const toggleOpenDeleteModal = () => {
    setIsDeleteModalOpen(!isDeleteModalOpen);
  };


  const toggleOpenDetailModal = () => {
    setIsDetailModalOpen(!isDetailModalOpen);
  };

  return (
    <div className="flex items-center w-full">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={todo.is_completed}
          onChange={() => handleCheckboxChange(todo)}
          className="mr-2 rounded border-gray-300 focus:ring-indigo-200 focus:border-indigo-500"
          key={todo.id}
        />
        <div className="flex flex-col">
          <span className={todo.is_completed ? 'line-through' : ''}>
            {todo.title}
          </span>
          <span className="text-gray-500 text-sm">{todo.description}</span>
        </div>
      </div>
      <div className="flex justify-end ml-auto flex-1">
        <TodoProvider>
          <button
            type="button"
            className="bg-white rounded border border-gray-300 px-4 py-2 mr-2 hover:bg-gray-100"
            onClick={toggleOpenDetailModal}
          >
            Details
          </button>
          {isDetailModalOpen && <DetailModal isOpen={isDetailModalOpen} handleCloseModal={toggleOpenDetailModal} todo={todo}/>}

          <button
            type="button"
            className="bg-red-500 rounded border border-red-500 px-4 py-2 text-white hover:bg-red-700"
            onClick={() => toggleOpenDeleteModal()}
          >
            <img src="images\bin.png" alt="delete icon" className="w-6 h-6"/>
          </button>
          {isDeleteModalOpen && <DeleteModal isOpen={isDeleteModalOpen} handleCloseModal={toggleOpenDeleteModal} todo={todo} />}
        </TodoProvider>
      </div>
    </div>
  );
}

export default Todo;