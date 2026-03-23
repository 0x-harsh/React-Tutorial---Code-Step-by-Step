import { useState } from "react"

const App = () => {
    const [skills, setSkills] = useState([])
    const handleSkills = (event) => {
        console.log(event.target.value, event.target.checked)
        if (event.target.checked) {
            setSkills([...skills, event.target.value])
        } else {
            setSkills([...skills.filter((item) => item != event.target.value)])
        }
    }
    return (
        <div className="flex flex-col gap">
            <h1>Handle Checkbox</h1>
            <form action="" className="flex flex-col gap">
                <h3>Select Your Skills</h3>
                <label htmlFor="php" className="flex gap">
                    <input type="checkbox" name="php" id="php" value="php" onChange={handleSkills} />
                    PHP
                </label>
                <label htmlFor="java" className="flex gap">
                    <input type="checkbox" name="java" id="java" value="java" onChange={handleSkills} />
                    Java
                </label>
                <label htmlFor="js" className="flex gap">
                    <input type="checkbox" name="js" id="js" value="js" onChange={handleSkills} />
                    JavaScript
                </label>
            </form>
            <h4>{skills.toString().replaceAll(',', ', ')}</h4>
        </div>
    )
}

export default App