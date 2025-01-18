import React, { useState } from 'react';
import Modal from '../Modal';
import ContentEditable from 'react-contenteditable';
import { updateTodo } from '../DataService/Api';

function DetailModal({ isOpen, handleCloseModal, todo}) {
    const [title, setTitle] = useState(todo.title);
    const [description, setDescription] = useState(todo.description);

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleDescriptionChange = (event) => {    
        setDescription(event.target.value);
    };

    const handleBlur = async () => {
        const updatedTodo = { ...todo, title, description };
        const response = await updateTodo(updatedTodo);
        if (response.status === 200) {
            console.log(response.data);
        } else {
            console.error('Error updating todo:', response.data, response.status);
        }
    };

  return (
    <Modal isOpen={isOpen} handleCloseModal={handleCloseModal}>
        <span className="text-lg font-semibold mb-2">
            <ContentEditable
                html={title}
                onChange={handleTitleChange}
                onBlur={handleBlur}
            />
        </span>
        <span>
            <ContentEditable
                html={description}
                onChange={handleDescriptionChange}
                onBlur={handleBlur}
            />
        </span>
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