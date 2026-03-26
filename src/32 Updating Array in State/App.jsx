import { useState } from "react"

const App = () => {
    const [data, setData] = useState([
        'Harsh', 'Amit', 'Kashish', 'Neha'
    ])

    const [user, setUser] = useState([
        { name: "Harsh", age: 20 },
        { name: "Amit", age: 25 },
        { name: "Kashish", age: 22 },
        { name: "Neha", age: 24 },
    ])

    const updateData = (value) => {
        data[data.length - 1] = value
        setData([...data])
    }

    const updateAge = (value) => {
        user[user.length-1].age = value
        setUser([...user])
    }

    return (
        <div>
            <h1>Updating Array in ReactJS</h1>
            <input type="text" placeholder="Update Last Value" onChange={(event) => { updateData(event.target.value) }} />
            {
                data.map((item, index) => {
                    return (
                        <div key={index}>{item}</div>
                    )
                })
            }
            <hr />
            <input type="text" placeholder="Update Age" onChange={(event) => { updateAge(event.target.value) }} />
            {
                user.map((item, index) => {
                    return (
                        <h4 key={index}>{item.name}, {item.age}</h4>
                    )
                })
            }
        </div>
    )
}

export default App