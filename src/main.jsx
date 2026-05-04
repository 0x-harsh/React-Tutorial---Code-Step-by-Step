import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './48 Routes for User list and Add User UI/App.jsx'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <StrictMode>
            <App />
        </StrictMode>
    </BrowserRouter>
)
