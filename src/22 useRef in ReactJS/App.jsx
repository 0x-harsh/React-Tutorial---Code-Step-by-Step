import { useRef } from "react";

const App = () => {
    const inputRef = useRef(null)
    const h1Ref = useRef(null)
    const inputHandler = () => {
        inputRef.current.focus()
        inputRef.current.style.backgroundColor = "white"
        inputRef.current.style.color = "black"
        inputRef.current.placeholder = "Enter Your Password"
        inputRef.current.input = "123"
    }

    const toggleHandler = () => {
        if (inputRef.current.style.display != 'none') {
            inputRef.current.style.display = 'none'
        } else {
            inputRef.current.style.display = 'block'
        }
        // This method is not recommended because in useRef we manipulate DOM
        // useState is recommended for this type of operation
    }

    const h1Handler = () => {
        h1Ref.current.style.color = "green"
    }

    return (
        <div className="flex flex-col gap">
            <h1>useRef Hook</h1>
            <button onClick={toggleHandler}>Toggle</button>
            <div className="flex flex-col gap">
                <input ref={inputRef} type="text" placeholder="Enter Your Name" />
                <button onClick={inputHandler}>Focus on Input Field</button>
            </div>
            <h2 ref={h1Ref}>Code Step by Step</h2>
            <button onClick={h1Handler}>Change Color</button>
        </div>
    )
}

export default App