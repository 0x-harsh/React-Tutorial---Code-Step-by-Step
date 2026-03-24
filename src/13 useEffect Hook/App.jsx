import { useEffect, useState } from "react"

const App = () => {
    const [counter, setCounter] = useState(0)
    const [data, setData] = useState(0)

    useEffect(() => {
        displayCounter()
    }, [counter])
    // [] blank array means do the given task one time only
    // [counter] do the given task when counter changes
    
    useEffect(() => {
        callOnce()
    }, [])
    // we can use multiple useEffects in a single component

    function displayCounter() {
        console.log("Counter:", counter)
    }

    function callOnce() {
        console.log("callOnce called!")
    }

    return (
        <div>
            <h1>useEffect Hook</h1>
            <div className="flex gap">
                <button onClick={() => { setCounter(counter + 1) }}>Counter: {counter}</button>
            <button onClick={() => { setData(data + 1) }}>Data: {data}</button>
            </div>
        </div>
    )
}

export default App

// On change in state component re-renders so function callOnce called everytime component re-renders
// to stop calling it everytime we use useEffect