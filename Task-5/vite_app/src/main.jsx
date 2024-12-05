import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import YouTube from './YouTube.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <YouTube />
  </StrictMode>,
)
