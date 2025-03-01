import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { UserContextProvider } from './context/UserContext.jsx'

export const server = 'http://localhost:5000'

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <UserContextProvider>
    <App />
    </UserContextProvider>
  </StrictMode>,
  
)
