import { Link } from "react-router"

const AddUser = () => {
    return (
        <div>
            <h1>ADD NEW USER</h1>
            <div>
                <input type="text" />
                <input type="number" />
                <input type="email" />
                <button>Add</button>
            </div>
            <div>
                <Link to="/" >Back to Home</Link>
            </div>
        </div>
    )
}

export default AddUser