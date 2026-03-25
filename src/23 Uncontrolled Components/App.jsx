import { useRef } from "react"

const App = () => {

    const userRef = useRef()
    const passRef = useRef()

    const handleForm = (event) => {
        event.preventDefault()
        const username = document.querySelector("#username").value
        const password = document.querySelector("#password").value
        console.log(username, password)
    }

    const handleFormRef = (event) => {
        event.preventDefault()
        const username = userRef.current.value
        const password = passRef.current.value
        console.log(username, password)
    }
    return (
        <div className="flex flex-col gap">
            <h1>Uncontrolled Components</h1>
            <form action="" onSubmit={handleForm} className="flex flex-col gap">
                <input type="text" placeholder="Enter Usename" id="username" />
                <input type="password" placeholder="Enter Password" id="password" />
                <button>Submit</button>
            </form>

            <hr />

            <h1>Uncontrolled Components with useRef</h1>
            <form action="" onSubmit={handleFormRef} className="flex flex-col gap">
                <input type="text" placeholder="Enter Usename" id="usernameRef" ref={userRef} />
                <input type="password" placeholder="Enter Password" id="passwordRef" ref={passRef} />
                <button>Submit with Ref</button>
            </form>
        </div>
    )
}

export default App

// Uncontrolled Components : when we control form or input fields directly with DOM manipulation (not using state) in a Component, it is called uncontrolled components
// We can make uncontrolled components with:
// query selector
// useRef