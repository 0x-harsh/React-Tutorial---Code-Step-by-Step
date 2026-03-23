import { useState } from "react"

const App = () => {
    const [gender, setGender] = useState('female')
    const [city, setCity] = useState('delhi')
    return (
        <div className="flex flex-col gap">
            <h1>Handling Radio and Dropdown in ReactJS</h1>
            {/* radio buttons */}
            <div>
                <h2>Select Gender</h2>
                <div className="flex gap">
                    <input type="radio" name="gender" id="male" checked={gender == 'male'} value="male" onChange={(e) => { setGender(e.target.value) }} />
                    <label htmlFor="male">Male</label>
                </div>
                <div className="flex gap">
                    <input type="radio" name="gender" id="female" checked={gender == 'female'} value="female" onChange={(e) => { setGender(e.target.value) }} />
                    <label htmlFor="female">Female</label>
                </div>
                <div className="selected">Selected Gender: <b>{gender}</b></div>
            </div>

            {/* dropdown */}
            <div>
                <h2>Select City</h2>
                <div className="selectcity">
                    <select onChange={(e) => { setCity(e.target.value) }} defaultValue={"delhi"}>
                        <option value="noida">Noida</option>
                        <option value="delhi">Delhi</option>
                        <option value="gurugram">Gurugram</option>
                    </select>
                </div>
                <div className="selected">Selected City: <b>{city}</b></div>
            </div>
        </div>
    )
}

export default App