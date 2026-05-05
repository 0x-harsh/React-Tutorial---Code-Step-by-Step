import { useEffect, useState } from "react"
import { useParams, Link, Navigate, useNavigate } from "react-router"

const UpdateUser = () => {
    const params = useParams()
    const userId = params.id
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        getUserData()
    }, [])

    const url = 'http://localhost:3000/users'

    const getUserData = async () => {
        const response = await fetch(url + "/" + userId)
        const data = await response.json()
        setName(data.name)
        setAge(data.age)
        setEmail(data.email)
    }

    const updateUser = async () => {
        const response = await fetch(url + "/" + userId, {
            method: 'PUT',
            body: JSON.stringify({
                name,
                email,
                age
            })
        })
        const data = await response.json()
        console.log(data)
        if (data) {
            alert("User Details Updated")
            navigate("/users")
        }
    }
    return (
        <div>
            <h1>UPDATE USER</h1>
            <div className="w-100 flex flex-col gap-4 text-white">
                <input onChange={(e) => { setName(e.target.value) }} type="text" className="bg-[#222] border border-neutral-600" placeholder="Full Name" value={name} />
                <input onChange={(e) => { setAge(e.target.value) }} type="number" className="bg-[#222] border border-neutral-600" placeholder="Age" value={age} />
                <input onChange={(e) => { setEmail(e.target.value) }} type="email" className="bg-[#222] border border-neutral-600" placeholder="Email" value={email} />
                <button onClick={(e) => { updateUser() }} className="bg-blue-700 font-medium" >Update</button>
            </div>
            <Link to="/users" >User List</Link>
        </div>
    )
}

export default UpdateUser