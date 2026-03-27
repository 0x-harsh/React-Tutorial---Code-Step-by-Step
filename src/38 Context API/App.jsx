import { useState } from 'react'
import College from './College.jsx'
import { SubjectContext } from './ContextData.jsx'

const App = () => {
    const [subject, setSubject] = useState()
    return (
        <div style={{ border: "1px solid #888", backgroundColor: "#222", padding: "1rem", }} className="flex flex-col gap">
            <SubjectContext.Provider value={subject}>
                <div className="flex gap">
                    <div style={{ width: "fit-content", padding: "0.5rem", border: "1px solid #888" }}>
                        <select value={subject} onChange={(event) => { setSubject(event.target.value) }}>
                            <option value="">Select Subject</option>
                            <option value="Mathematics">Mathematics</option>
                            <option value="English">English</option>
                            <option value="physics">Physics</option>
                            <option value="Chemistry">Chemistry</option>
                            <option value="Computer Science">Computer Science</option>
                        </select>
                    </div>
                    <button onClick={() => { setSubject('') }}>Clear Subject</button>
                </div>
                Context API
                <College />
            </SubjectContext.Provider>
        </div>
    )
}

export default App