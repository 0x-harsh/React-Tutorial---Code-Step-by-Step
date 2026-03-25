import { useRef } from "react"
import Input from './Input.jsx'

const App = () => {
    const inputRef = useRef()

    const updateInput = () => {
        inputRef.current.focus()
        inputRef.current.value = 200
    }
    return (
        <div>
            <h1>ForwardRef in React</h1>
            <Input ref={inputRef} />
            <button onClick={() => updateInput()}>Update Input</button>
        </div>
    )
}

export default App