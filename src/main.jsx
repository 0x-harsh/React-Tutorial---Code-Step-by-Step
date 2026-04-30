import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './47 install JSON Server and Make API/App.jsx'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <StrictMode>
            <App />
        </StrictMode>
    </BrowserRouter>
)
