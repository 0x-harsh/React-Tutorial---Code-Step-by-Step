import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import Users from "./pages/Users"

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/users" element={<Users/>} />
            <Route path="/add" element={<AddUsers/>} />
        </Routes>
    )
}

export default App