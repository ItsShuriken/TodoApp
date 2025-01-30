import React, { useContext } from 'react';
import Modal from '../../Templates/Modal';
import ContentEditable from 'react-contenteditable';
import { TodoListContext } from '../../DataService/TodoListContext.jsx';

function DetailModal({ isOpen, handleCloseModal, todo}) {
    const { handleUpdateTodo } = useContext(TodoListContext);

    const handleBlur = async (event, field) => {
        const text = event.target.textContent;
        const updatedTodo = { ...todo, [field]: text };
        await handleUpdateTodo(updatedTodo);
    };

  return (
    <Modal isOpen={isOpen} handleCloseModal={handleCloseModal}>
        <span className="text-lg font-semibold mb-2">
            <ContentEditable
                html={todo.title}
                onBlur={(event) => handleBlur(event, 'title')}
            />
        </span>
        <span>
            <ContentEditable
                html={todo.description}
                onBlur={(event) => handleBlur(event, 'description')}
            />
        </span>
        <div className="relative mt-4">
      </div>
    </Modal>
  );
}

export default DetailModal;