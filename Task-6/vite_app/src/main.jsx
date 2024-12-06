import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Youtube from './you.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Youtube />
  </StrictMode>,
)
