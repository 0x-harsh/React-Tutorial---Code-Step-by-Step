import { useState } from "react"

const App = () => {
    const [users, setUsers] = useState([])
    const [user, setUser] = useState('')
    const addUserHandler = () => {
        setUsers([...users, user])
    }
    const total = users.length
    const last = users[users.length-1]
    const unique = [...new Set(users)].length
    return (
        <div>
            <h2>Total User: {total}</h2>
            <h2>Last User: {last}</h2>
            <h2>Unique Total User: {unique}</h2>
            <input type="text" placeholder="enter name" onChange={(event) => { setUser(event.target.value) }} />
            <button onClick={addUserHandler}>Add User</button>
            {
                users.map((item, index) => {
                    return (
                        <h4 key={index}>{item}</h4>
                    )
                })
            }
        </div>
    )
}

export default App

// State that is calculated or derived from other state values or props within your component
// Derived state can be a variable
// No need to extra state only variables or constants are enough