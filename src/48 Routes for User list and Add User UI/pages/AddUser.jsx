import { useState } from "react"
import { Link } from "react-router"

const AddUser = () => {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')
    const addUser = async () => {
        const url = 'https://localhost:3000/users'
        let response = await fetch(url, {
            method: 'Post',
            body: JSON.stringify({
                "name": name,
                "age": age,
                "email": email
            })
        })
        response = await response.json()
        if(response) {
            console.log(response)
        }
    }
    return (
        <div>
            <h1>ADD NEW USER</h1>
            <div className="w-100 flex flex-col gap-4 text-white">
                <input onChange={(e) => { setName(e.target.value) }} type="text" className="rounded-lg bg-[#222] border border-neutral-600" />
                <input onChange={(e) => { setAge(e.target.value) }} type="number" className="rounded-lg bg-[#222] border border-neutral-600" />
                <input onChange={(e) => { setEmail(e.target.value) }} type="email" className="rounded-lg bg-[#222] border border-neutral-600" />
                <button onClick={(e) => { addUser() }} className="rounded-lg bg-blue-700 font-medium" >Add</button>
            </div>
            <div>
                <Link to="/" >Back to Home</Link>
            </div>
        </div>
    )
}

export default AddUser