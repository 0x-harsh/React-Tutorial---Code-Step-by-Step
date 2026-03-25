import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './28 Keep Your Components Pure/App.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>
)
