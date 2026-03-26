import { useState } from 'react'
import AddUser from './AddUser.jsx'
import DisplayUser from './DisplayUser.jsx'

const App = () => {
    const [user, setUser] = useState('')
    return (
        <div>
            <AddUser setUser={setUser} />
            <DisplayUser user={user} />
        </div>
    )
}

export default App