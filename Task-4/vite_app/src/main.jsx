import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Sidebar from './Sidebar-2.jsx'
import MainMenu from './MainMenu-2.jsx'
import PlayControls from './PlayControls-2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Sidebar/>
      <MainMenu/>
      <PlayControls/>
  </StrictMode>,
)
