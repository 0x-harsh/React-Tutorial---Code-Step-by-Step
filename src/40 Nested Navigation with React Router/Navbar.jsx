import { Link } from "react-router"

const Navbar = () => {
    return (
        <div className="flex justify-between py-2 px-4">
            <h1>Link</h1>
            <div className="flex gap-4">
                <Link to="/" >Home</Link>
                <Link to="/about" >About</Link>
                <Link to="/college" >College</Link>
            </div>
        </div>
    )
}

export default Navbar