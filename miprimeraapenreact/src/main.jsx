import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LoginForm from './LoginForm.jsx'
import StudentListScreen from './screens/StudentListScreen.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>  
    <StudentListScreen></StudentListScreen>
  </StrictMode>,
)
