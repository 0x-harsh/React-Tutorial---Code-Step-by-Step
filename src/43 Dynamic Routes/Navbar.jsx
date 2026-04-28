import { Link, Outlet } from "react-router"

const Navbar = () => {
    return (
        <div>
            <div className="flex justify-between py-2 px-4">
                <h1>Link</h1>
                <div className="flex gap-4">
                    <Link to="/" >Home</Link>
                    <Link to="/about" >About</Link>
                    <Link to="/college" >College</Link>
                    <Link to="/in/user/login" >Login</Link>
                    <Link to="/users" >Users</Link>
                </div>
            </div>
            <Outlet /> {/* displays child routes data */}
        </div>
    )
}

export default Navbar