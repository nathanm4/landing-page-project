import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// Import migrated global styles from the original project
import './styles.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
