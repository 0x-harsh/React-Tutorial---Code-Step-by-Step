import { useEffect, useState } from "react"
import { Link } from "react-router"

const Users = () => {
    const [usersData, setUsersData] = useState()

    useEffect(() => {
        setLoading(true)
        getData()
    }, [])

    async function getData() {
        const url = 'http://localhost:3000/users'
        let response = await fetch(url) // get request by default
        let data = await response.json()
        setUsersData(data)
        setLoading(false)
    }
    return (
        <div>
            <h1>USERS LIST</h1>
            <ul className="userListItemHeader">
                {
                    usersData && usersData.map((user)=>{
                        return (
                            <li className="userListItem">
                                <span>{user.name}</span>
                                <span>{user.age}</span>
                                <span>{user.email}</span>
                            </li>
                        )
                    })
                }
            </ul>
            <div>
                <Link to="/" >Back to Home</Link>
            </div>
        </div>
    )
}

export default Users