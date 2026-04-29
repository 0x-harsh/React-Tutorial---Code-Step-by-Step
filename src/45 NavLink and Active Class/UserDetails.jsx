import { Link, useParams } from "react-router"

const UserDetails = () => {
    const params = useParams()
    console.log(params)
    return (
        <div>
            <h1>User Detail Page</h1>
            <h2>User Id is {params.id}</h2>
            <Link to="/users">Back</Link>
        </div>
    )
}

export default UserDetails