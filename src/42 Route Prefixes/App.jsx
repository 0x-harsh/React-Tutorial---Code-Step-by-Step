import { Navigate, Route, Routes } from "react-router"
import College from "./College"
import Navbar from "./Navbar"
import About from "./About"
import Home from "./Home"
import Student from "./Student"
import Department from "./Department"
import CollegeDetails from "./CollegeDetails"
import Login from "./Login"

const App = () => {
    return (
        <div>
            {/* <Navbar /> */}
            <Routes>
                <Route element={<Navbar />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="in">
                        <Route path="/in/user">
                            <Route path="in/user/login" element={<Login />} />
                            <Route path="in/user/signup" element={<Login />} />
                            <Route path="in/user/reset" element={<Login />} />
                        </Route>
                    </Route>
                </Route>

                <Route path="/college" element={<College />}>
                    <Route index element={<Student />} />
                    <Route path="department" element={<Department />} />
                    <Route path="details" element={<CollegeDetails />} />
                </Route>

                <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
        </div>
    )
}

export default App