import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './46 API - Application Programming Interface/App.jsx'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <StrictMode>
            <App />
        </StrictMode>
    </BrowserRouter>
)
