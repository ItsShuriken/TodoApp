export const filterTodos = (todos, filter) => {
  return todos.filter((todo) => {
    // Apply the filter logic here
    // For example, you can filter by completed state:
    if (filter.completed !== undefined) {
      return todo.is_completed === filter.completed;
    }
    // Add more filter conditions here

    // If no filter condition matches, return true to include the todo
    return true;
  });
};