import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './task.css'
import Task from './task.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Task />
  </StrictMode>,
)
