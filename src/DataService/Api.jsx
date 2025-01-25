import instance from './axiosInstance';

const addTodoRequest = async (newTodo) => {
  console.log(newTodo);
  const response = await instance.post('/api/todos', newTodo);
  return response;
};

// api.jsx
const fetchTodosRequest = async () => {
  const response = await instance.get('/api/todos');
  return response;
};

async function updateTodoRequest (updatedTodo){
  try {
    console.log(updatedTodo);
    const response = await instance.put(`/api/todos/${updatedTodo.id}`, updatedTodo);
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function deleteTodoRequest(todo) {
  try {
    const response = await instance.delete(`/api/todos/${todo.id}`, todo);
    return response;
  } catch (error) {
    // Handle any errors that occur during the deletion
    console.error(error);
  }
}

export { addTodoRequest, fetchTodosRequest, updateTodoRequest, deleteTodoRequest };