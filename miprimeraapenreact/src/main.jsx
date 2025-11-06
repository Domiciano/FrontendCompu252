import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import LoginForm from './screens/LoginForm.jsx'
import StudentListScreen from './screens/StudentListScreen.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>  
    <App></App>
  </StrictMode>,
)
