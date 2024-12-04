import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Ludo from './ludo.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Ludo />
  </StrictMode>,
)