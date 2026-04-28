import { Outlet } from "react-router"
import { Link } from "react-router"

const College = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h1>College</h1>
            <h3><Link to="/" >Go back to Home Page</Link></h3>
            <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
                <Link to="" >Students</Link>
                <Link to="department" >Departments</Link>
                <Link to="details" >College Details</Link>
            </div>
            <Outlet />
        </div>
    )
}

export default College