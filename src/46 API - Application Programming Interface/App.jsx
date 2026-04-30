import { useEffect, useState } from "react"

const App = () => {
    const [users, setUsers] = useState()

    useEffect(() => {
        getData()
    }, [])

    async function getData() {
        const url = 'https://dummyjson.com/users'
        let response = await fetch(url) // get request by default
        let data = await response.json()
        setUsers(data.users)
    }
    return (
        <div>
            <div>Fetch data from the api</div>
            <div className="usercardcontainer">
                {
                    users && users.map((user) => {
                        return (
                            <div className="usercard">
                                <span>id: {user.id}</span>
                                <span>Firstname: {user.firstName}</span>
                                <span>Lastname: {user.lastName}</span>
                                <span>Age: {user.age}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default App