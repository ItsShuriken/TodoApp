import React, { useState } from 'react'

const AddTodo = ({ addTodo }) => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');

	const handleTitleChange = (event) => {
		setTitle(event.target.value);
	}
	const handleDescriptionChange = (event) => {
		setDescription(event.target.value);
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		if (title.trim() ==='') {
			alert('Todo title cannot be empty!');
			return;
		}
		addTodo({ title: title, is_completed: false , description: description });
		setTitle('');
		setDescription('');
	}

	return (
	<form onSubmit={handleSubmit} className='flex flex-col gap-2 p-4'>
		<input 
			type="text" 
			value={title}
			onChange={handleTitleChange}
			placeholder="add a new todo..."
			className="border rounded p-2"
		/>
		<textarea 
			placeholder="add a description (optional)"
			className="border rounded p-2 text-sm"
			value={description}
			onChange={handleDescriptionChange}
		/>
		<button type="submit" className="bg-blue-500 text-white rounded p-2">
			Add Todo
		</button>
	</form>
	)
}

export default AddTodo