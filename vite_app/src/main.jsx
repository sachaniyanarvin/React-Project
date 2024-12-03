import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import New from './New.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <User /> */}
    <New />
  </StrictMode>,
)
