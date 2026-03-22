import { useState } from "react"

const App = () => {
    const [fruit, setFruit] = useState('Mango')

    const fruitHandler = () => {
        setFruit('Watermelon')
    }
    return (
        <div>
            <h1>States in ReactJS</h1>
            <h1 id="fruitName">{fruit}</h1>
            <button id="btn" onClick={fruitHandler}>Change Fruit</button>
        </div>
    )
}

export default App

// State re-render component automatically so taht data can visible on UI
// They are mutable and dynamic

// Hooks in ReactJS
    // Hooks are the special feture for functional component
    // Hooks let you use different React features from your components
        // State, Life cycle methods, Side effects etc
    // Hooks: useState
    //     useContext
    //     useEffect