import React from 'react';
import Modal from '../../Templates/Modal';
import { deleteTodo } from '../../DataService/Api';

function DeleteModal({ isOpen, handleCloseModal, todo, handleDeleteTodo }) {

  const handleConfirmDelete = () => {
    handleDeleteTodo(todo);
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