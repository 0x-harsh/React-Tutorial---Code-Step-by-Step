import { useState } from "react"

const ChangeColor = ({ color, setColor }) => {
    return (
        <div className="selectCont">
            <select onChange={(e) => { setColor(e.target.value) }} selected="White">
                <option value="white">White</option>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
            </select>
        </div>
    )
}

export default ChangeColor