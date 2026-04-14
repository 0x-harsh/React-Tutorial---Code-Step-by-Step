import { Outlet } from "react-router"
import { Link } from "react-router"

const College = () => {
    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <h1>College</h1>
            <div style={{display: "flex", gap: "20px", alignItems: "center"}}>
                <Link to="" >Students</Link>
                <Link to="department" >Departments</Link>
                <Link to="details" >College Details</Link>
                <Outlet />
            </div>
        </div>
    )
}

export default College