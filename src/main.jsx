import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
    <App />
    <ToastContainer autoClose={1500}/>
  </StrictMode>
  </BrowserRouter>
)
