import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Fetch from './components/Fetch.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Fetch />
  </StrictMode>,
)

