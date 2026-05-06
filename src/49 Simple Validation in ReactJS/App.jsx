import { useState } from "react"

const App = () => {
    const [name, setName] = useState()
    const [nameErr, setNameErr] = useState()

    const [pass, setPass] = useState()
    const [passErr, setPassErr] = useState()

    const handleAction = () => {
        console.log("Hello")
    }

    const handleName = (event) => {
        console.log(event.target.value)
        let name = event.target.value
        if (name.length > 5) {
            setNameErr("Please enter a valid username. Only 5 characters allowed")
        } else {
            setNameErr('')
        }
    }

    const handlePass = (event) => {
        console.log(event.target.value)
        let password = event.target.value
        if (password.length > 5) {
            setPassErr("Please enter a valid username. Only 5 characters allowed")
        } else {
            setPassErr('')
        }
    }
    return (
        <div>
            <h1>Simple Validation in ReactJS</h1>
            <form action={handleAction} className="flex flex-col gap-4">
                <input type="text" placeholder="Enter Full Name" onChange={handleName} className={nameErr ? 'redbox' : ''} />
                {nameErr ? <span className="err">please enter a valid username. only 5 characters allowed!</span> : ''}
                <input type="text" placeholder="Enter Password" onChange={handlePass} className={passErr ? 'redbox' : ''} />
                {passErr ? <span className="err">please enter a valid password. only 5 characters allowed!</span> : ''}
                <button disabled={nameErr && passErr}>Submit</button>
            </form>
        </div>
    )
}

export default App