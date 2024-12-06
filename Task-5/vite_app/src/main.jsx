import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Sidebar from './components/Sidebar.jsx'
import MainContent from './components/MainContent.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Sidebar />
    <MainContent />
  </StrictMode>,
)
