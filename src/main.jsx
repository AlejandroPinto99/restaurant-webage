import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "../i18n.js"; // Importar la configuración de i18n

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
