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

const updateTodo = async (updatedTodo) => {
  try {
    console.log(updatedTodo);
    const response = await instance.put(`/api/todos/${updatedTodo.id}`, updatedTodo);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export { addTodo, fetchTodos, updateTodo };