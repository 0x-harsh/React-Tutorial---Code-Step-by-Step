import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './47 install JSON Server Make API Integrate API and Loader/App.jsx'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <StrictMode>
            <App />
        </StrictMode>
    </BrowserRouter>
)
