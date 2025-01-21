import instance from './axiosInstance';

const addTodo = async (newTodo) => {
  console.log(newTodo);
  const response = await instance.post('/api/todos', newTodo);
  return response.data;
};

// api.jsx
const fetchTodos = async () => {
  const response = await instance.get('/api/todos');
  return response.data;
};

async function updateTodo (updatedTodo){
  try {
    console.log(updatedTodo);
    const response = await instance.put(`/api/todos/${updatedTodo.id}`, updatedTodo);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function deleteTodo(todo) {
  try {
    const response = await instance.delete(`/api/todos/${todo.id}`, todo);
    return response;
  } catch (error) {
    // Handle any errors that occur during the deletion
    console.error(error);
  }
}

export { addTodo, fetchTodos, updateTodo, deleteTodo };