import { useState } from 'react'
import Counter from '../components/Counter.jsx'

const App = () => {
    const [counter, setCounter] = useState(0)
    const [data, setData] = useState(0)
    
    return (
        <div>
            <h1>Handle Props side effect with useEffect in component</h1>
            <div className="flex gap">
                <button onClick={()=>{setCounter(counter+1)}}>Counter</button>
                <button onClick={()=>{setData(data+1)}}>Data</button>
            </div>
            <Counter counter={counter} data={data} />
        </div>
    )
}

export default App