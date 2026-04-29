import { Link } from "react-router"

const Users = () => {
    const userData = [
        { id: 1, name: 'Anil' },
        { id: 2, name: 'Sam' },
        { id: 3, name: 'Sidhu' },
        { id: 4, name: 'Peter' },
        { id: 5, name: 'Bruce' },
        { id: 6, name: 'Tony' }
    ]
    return (
        <div>
            <h2>Users Page</h2>
            {
                userData.map((item) => {
                    return (
                        <div>
                            <div>
                                <Link to={"/users/" + item.id} >{item.name}</Link>
                            </div>
                        </div>
                    )
                })
            }
            <h3>Users list with their name in the url.</h3>
            {
                userData.map((item) => {
                    return (
                        <div>
                            <div>
                                <Link to={"/users/" + item.id + "/" + item.name.toLowerCase()} >{item.name}</Link>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Users