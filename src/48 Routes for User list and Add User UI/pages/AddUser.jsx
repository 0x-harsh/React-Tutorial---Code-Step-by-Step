import { useState } from "react"
import { Link } from "react-router"

const AddUser = () => {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')
    const addUser = async () => {
        const url = 'http://localhost:3000/users'
        if (name && age && email) {
            let response = await fetch(url, {
                method: 'Post',
                body: JSON.stringify({ name, age, email })
            })
            response = await response.json()
            if (response) {
                console.log(response)
            }
        }
        else {
            alert("All fields are required")
        }
    }
    return (
        <div>
            <h1>ADD NEW USER</h1>
            <div className="w-100 flex flex-col gap-4 text-white">
                <input onChange={(e) => { setName(e.target.value) }} type="text" className="bg-[#222] border border-neutral-600" placeholder="Full Name" />
                <input onChange={(e) => { setAge(e.target.value) }} type="number" className="bg-[#222] border border-neutral-600" placeholder="Age" />
                <input onChange={(e) => { setEmail(e.target.value) }} type="email" className="bg-[#222] border border-neutral-600" placeholder="Email" />
                <button onClick={(e) => { addUser() }} className="bg-blue-700 font-medium" >Add</button>
            </div>
            <div>
                <Link to="/" >Back to Home</Link>
            </div>
        </div>
    )
}

export default AddUser