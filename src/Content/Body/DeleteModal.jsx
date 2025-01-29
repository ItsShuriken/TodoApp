import React, { useContext } from 'react';
import Modal from '../../Templates/Modal';
import { TodoListContextWrapper } from '../../DataService/TodoListContextWrapper';

function DeleteModal({ isOpen, handleCloseModal, todo }) {
  const { handleDeleteTodo } = useContext(TodoListContextWrapper);

  const handleConfirmDelete = async() => {
    await handleDeleteTodo(todo);
    handleCloseModal();
  };

  return (
    <Modal isOpen={isOpen} handleCloseModal={handleCloseModal}>
      <h2>Delete Todo</h2>
      <p>Are you sure you want to delete this todo?</p>
      <button
        className="bg-red-500 text-white rounded p-2"
        onClick={handleConfirmDelete}
      >
        Confirm
      </button>
      <button
        className="bg-gray-500 text-white rounded p-2"
        onClick={handleCloseModal}
      >
        Cancel
      </button>
    </Modal>
  );
}

export default DeleteModal;