import { useReducer } from "react"

const emptyData = {
    name: '',
    passowrd: '',
    email: '',
    city: '',
    address: '',
}

const reducer = (data, action) => {
    return { ...data, [action.type]: action.val }
}

const App = () => {
    const [state, dispatch] = useReducer(reducer, emptyData)
    return (
        <div className="flex flex-col gap-4">
            <h1>useReducer Hook in ReactJS</h1>
            <form action="" className="flex flex-col gap-4">
                <input type="text" placeholder="Enter Full Name" onChange={(e) => { dispatch({ val: e.target.value, type: 'name' }) }} />
                <input type="text" placeholder="Enter Password" onChange={(e) => { dispatch({ val: e.target.value, type: 'password' }) }} />
                <input type="text" placeholder="Enter Email" onChange={(e) => { dispatch({ val: e.target.value, type: 'email' }) }} />
                <input type="text" placeholder="Enter City" onChange={(e) => { dispatch({ val: e.target.value, type: 'city' }) }} />
                <input type="text" placeholder="Enter Address" onChange={(e) => { dispatch({ val: e.target.value, type: 'address' }) }} />
                <button>Submit Details</button>
            </form>
            <ul className="flex flex-col gap-4">
                <li>Name: {state.name}</li>
                <li>Password: {state.password}</li>
                <li>Email: {state.email}</li>
                <li>City: {state.city}</li>
                <li>Address: {state.address}</li>
            </ul>
        </div>
    )
}

export default App