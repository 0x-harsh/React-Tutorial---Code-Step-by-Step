import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './49 Simple Validation in ReactJS/App.jsx'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <StrictMode>
            <App />
        </StrictMode>
    </BrowserRouter>
)
