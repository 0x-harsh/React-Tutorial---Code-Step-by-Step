import { useEffect, useState } from "react"
import { Link } from "react-router"

const Users = () => {
    const [usersData, setUsersData] = useState()
    const [loading, setLoading] = useState()

    useEffect(() => {
        setLoading(true)
        getData()
    }, [])

    const url = 'http://localhost:3000/users'

    async function getData() {
        let response = await fetch(url) // get request by default
        let data = await response.json()
        setUsersData(data)
        setLoading(false)
    }

    const deleteUser = async (userId) => {
        const response = await fetch(url+"/"+userId, {
            method: 'DELETE'
        })
        let data = await response.json()
        if(data) {
            alert("record deleted!")
            getData()
        }
    }
    return (
        <div>
            <h1>USERS LIST</h1>
            <ul className="userListItemCont">
                <div className="userLIstItemHeader">
                    <span>Name</span>
                    <span>Age</span>
                    <span>Email</span>
                    <span>Action</span>
                </div>
                {
                    loading ? <div>Loading...</div> :
                        usersData && usersData.map((user) => {
                            return (
                                <li className="userListItem" key={user.id}>
                                    <span>{user.name}</span>
                                    <span>{user.age}</span>
                                    <span>{user.email}</span>
                                    <span>
                                        <button onClick={() => { deleteUser(user.id) }} className="delete">Delete</button>
                                    </span>
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