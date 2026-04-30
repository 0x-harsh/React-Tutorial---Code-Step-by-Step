// npm install json-server
// create a db.json file
// npx json-server db.json

import { useEffect, useState } from "react"

const App = () => {
    const [usersData, setUsersData] = useState()
    const [loading, setLoading] = useState(false)

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
            <div>Fetch data from the api</div>
            <div className="usercardcontainer">
                {
                    !loading ?
                        usersData && usersData.map((user) => {
                            return (
                                <div className="usercard" key={user.email}>
                                    <span>Name: {user.name}</span>
                                    <span>Age: {user.age}</span>
                                    <span>Email: {user.email}</span>
                                </div>
                            )
                        }) :
                        <h1>loading...</h1>
                }
            </div>
        </div>
    )
}

export default App