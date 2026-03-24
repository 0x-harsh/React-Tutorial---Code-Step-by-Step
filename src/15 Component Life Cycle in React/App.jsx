import { useState } from 'react'
import Counter from './Counter'

const App = () => {
    const [count, setCount] = useState(0)
    const [data, setData] = useState(0)
    const [display, setDisplay] = useState(true)

    return (
        <div className="flex flex-col gap">
            <div className="flex gap">
                <button onClick={() => { setCount(count + 1) }}>Increase Counter</button>
                <button onClick={() => { setData(data + 1) }}>Increase Data</button>
                <button onClick={() => { setDisplay(!display) }}>{display ? "Hide Elements" : "Show Elements"}</button>
            </div>
            {
                display ? <Counter count={count} data={data} /> : null
            }
        </div>
    )
}

export default App