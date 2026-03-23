import { useState } from "react"

const App = () => {
    const [value, setValue] = useState('')
    const inputHandler = (val) => {
        setValue(val)
    }
    return (
        <div className="flex flex-col gap">
            <h1>Get Input field value</h1>
            <div className="flex gap">
                <input type="text" placeholder="Type something..." onChange={(event) => { inputHandler(event.target.value) }} value={value}/>
                <button onClick={() => {setValue('')}}>Clear Input</button>
            </div>
            <div>{value}</div>
        </div>
    )
}

export default App