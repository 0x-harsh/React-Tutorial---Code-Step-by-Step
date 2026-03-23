import { useState } from "react"

const App = () => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    return (
        <div className="flex flex-col gap">
            <h1>Controlled Components</h1>
            <form action="" className="flex flex-col gap">
                <input type="text" placeholder="Enter username" value={name} onChange={(e) => { setName(e.target.value) }} />
                <input type="password" placeholder="Enter password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                <input type="email" placeholder="Enter email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                <div className="flex gap">
                    <button type="submit">Submit</button>
                    <button onClick={(e) => { e.preventDefault(); setName(''); setPassword(''); setEmail('') }}>Clear</button>
                </div>
            </form>
        </div>
    )
}

export default App

// A controlled component is a form whose input field value is controlled by React's state

// Benefits:
// Single source of truth
// validation and maipulation before submit
// dynamic updates values