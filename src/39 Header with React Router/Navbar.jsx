import { Link } from "react-router"

const Navbar = () => {
    return (
        <div className="navbar">
            <div>Logo</div>
            <div className="menu">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    )
}

export default Navbar