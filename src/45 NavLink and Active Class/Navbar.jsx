import { Link, NavLink, Outlet } from "react-router"

const Navbar = () => {
    return (
        <div>
            <div className="flex justify-between py-2 px-4">
                <h1>Link</h1>
                <div className="flex gap-4">
                    <NavLink className={({ isActive }) => isActive ? 'custom-active link' : 'link'} to="/" >Home</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'custom-active link' : 'link'} to="/about" >About</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'custom-active link' : 'link'} to="/college" >College</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'custom-active link' : 'link'} to="/in/user/login" >Login</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'custom-active link' : 'link'} to="/users" >Users</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'custom-active link' : 'link'} to="/users/list" >List</NavLink>
                </div>
            </div>
            <Outlet /> {/* displays child routes data */}
        </div>
    )
}

export default Navbar