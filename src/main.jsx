import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './45 Navlink and Active Class/App.jsx'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <StrictMode>
            <App />
        </StrictMode>
    </BrowserRouter>
)
