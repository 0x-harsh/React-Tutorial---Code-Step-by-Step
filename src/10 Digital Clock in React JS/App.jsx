import { useState } from "react"
import ChangeColor from '../components/ChangeColor.jsx'
import Clock from '../components/Clock.jsx'
const App = () => {
    const [color, setColor] = useState('white')
    return (
        <div className='flex flex-col gap'>
            <h2>Digital Clock in ReactJS</h2>
            <ChangeColor color={color} setColor={setColor} />
            <Clock color={color} />
        </div>
    )
}

export default App