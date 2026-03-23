import { useState } from 'react'
const Clock = ({ color }) => {
    let date = new Date()
    const [hours, setHours] = useState('00')
    const [minutes, setMinutes] = useState('00')
    const [seconds, setSeconds] = useState('00')
    const [meridiem, setMeridiem] = useState('AM')
    setTimeout(() => {
        let hours = date.getHours()
        if (hours > 12) {
            hours = hours - 12
            setMeridiem('PM')
        }
        setHours(hours.toString().padStart(2, '0'))
        setMinutes(date.getMinutes().toString().padStart(2, '0'))
        setSeconds(date.getSeconds().toString().padStart(2, '0'))
    }, 1000);
    return (
        <div className='clock flex gap' style={{ color: color }}>
            <div>
                <span>{hours}</span>:
                <span>{minutes}</span>:
                <span>{seconds}</span>
            </div>
            <span>{meridiem}</span>
        </div>
    )
}

export default Clock