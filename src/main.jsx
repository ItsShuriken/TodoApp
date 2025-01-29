import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { TodoListContextWrapper } from './DataService/TodoListContextWrapper'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TodoListContextWrapper>
      <App />
    </TodoListContextWrapper>
  </StrictMode>,
)
