import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import header from './header.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <header />
  </StrictMode>,
)
