import React from 'react';
import Modal from '../Modal';

function DetailModal({ isOpen, handleCloseModal, todo }) {
  return (
    <Modal isOpen={isOpen} handleCloseModal={handleCloseModal}>
      <h2>Todo Details</h2>
      <p>Title: {todo.title}</p>
      <p>Description: {todo.description}</p>
      <div className="relative mt-4">
        <button
            type="button"
            className="bg-white rounded border border-gray-300 px-4 py-2 hover:bg-gray-100"
            >
            <img src="images/compose.png" alt="edit icon" className="w-6 h-6" />
        </button>
      </div>
    </Modal>
  );
}

export default DetailModal;