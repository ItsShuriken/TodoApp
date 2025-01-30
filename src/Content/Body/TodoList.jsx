import React, { useContext, useEffect } from 'react'
import Todo from './Todo'
import { TodoListContext } from '../../DataService/TodoListContext.jsx'

function TodoList() {
    const { todos } = useContext(TodoListContext);

    useEffect(() => {
      // This will be called whenever the todos state changes
      console.log('Todos updated:', todos);
    }, [todos]);

    return (
    <ul className="w-3/4">
        {todos.map((todo) => (
          <li key={todo.id} className="border p-2 my-2 flex items-center">
            <Todo
              todo={todo}
            />
          </li>
        ))}
      </ul>
  )
}

export default TodoList