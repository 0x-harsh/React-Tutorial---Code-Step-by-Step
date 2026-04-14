import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './40 Nested Navigation with React Router/App.jsx'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <StrictMode>
            <App />
        </StrictMode>
    </BrowserRouter>
)
