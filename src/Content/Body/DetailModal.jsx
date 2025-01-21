import React, { useState } from 'react';
import Modal from '../../Templates/Modal';
import ContentEditable from 'react-contenteditable';
import { updateTodo } from '../../DataService/Api';

function DetailModal({ isOpen, handleCloseModal, todo}) {
    const [title, setTitle] = useState(todo.title);
    const [description, setDescription] = useState(todo.description);

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleDescriptionChange = (event) => {    
        setDescription(event.target.value);
    };

    const handleBlur = async (event, field) => {
        const text = event.target.textContent;
        console.log("description text", event);
        const updatedTodo = { ...todo, [field]: text };
        try {

            const response = await updateTodo(updatedTodo);
            if (response && response.status === 200) {
                console.log('Todo updated successfully');
            } else {
                console.log('Todo update failed', response);
            }
        } catch (error) {
            console.error('Error updating todo:', error);
        }
      };

  return (
    <Modal isOpen={isOpen} handleCloseModal={handleCloseModal}>
        <span className="text-lg font-semibold mb-2">
            <ContentEditable
                html={title}
                onChange={handleTitleChange}
                onBlur={(event) => handleBlur(event, 'title')}
            />
        </span>
        <span>
            <ContentEditable
                html={description}
                onChange={handleDescriptionChange}
                onBlur={(event) => handleBlur(event, 'description')}
            />
        </span>
        <div className="relative mt-4">
      </div>
    </Modal>
  );
}

export default DetailModal;