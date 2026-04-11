import { BrowserRouter, Navigate, Route, Routes } from "react-router"

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<h1>Home Page</h1>} />
                <Route path="/about" element={<h1>About Page</h1>} />
                <Route path="/login" element={<h1>Login Page</h1>} />
                <Route path="/*" element={<h1>404! Page Not Found</h1>} />
                {/* <Route path="/*" element={<Navigate to="/login" />} /> */}
            </Routes>
        </BrowserRouter>
    )
}

export default App