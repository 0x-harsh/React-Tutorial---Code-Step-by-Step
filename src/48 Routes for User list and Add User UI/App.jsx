import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import Users from "./pages/Users"
import AddUser from "./pages/AddUser"
import UpdateUser from "./pages/UpdateUser"

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/users" element={<Users/>} />
            <Route path="/add" element={<AddUser/>} />
            <Route path="/update/:id" element={<UpdateUser/>} />
        </Routes>
    )
}

export default App