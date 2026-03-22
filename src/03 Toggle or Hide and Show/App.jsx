import { useState } from "react"

const App = () => {

    const [display, setDisplay] = useState(false)
    const [num, setNum] = useState(1)

    return (
        <div className="appCont">
            <h1>Toggle in ReactJS</h1>
            <button onClick={() => { setDisplay(!display) }}>Change User</button>
            {
                display ? <h2>Harsh Dhiman</h2> : <h2>Username</h2>
            }
            <ul className="numCont">
                <li onClick={() => {setNum(1)}}>1</li>
                <li onClick={() => {setNum(2)}}>2</li>
                <li onClick={() => {setNum(3)}}>3</li>
                <li onClick={() => {setNum(4)}}>4</li>
                <li onClick={() => {setNum(5)}}>5</li>
                <li onClick={() => {setNum(6)}}>6</li>
            </ul>
            {
                num==1?<h2>Harsh Dhiman</h2>:
                num==2?<h2>Amit Saini</h2>:
                num==3?<h2>Kashish Kamboj</h2>:
                num==4?<h2>Neha Sharma</h2>:
                num==5?<h2>Sahil Parjapati</h2>:
                num==6?<h2>Harjeet Kaur</h2>:null
            }
        </div>
    )
}

export default App