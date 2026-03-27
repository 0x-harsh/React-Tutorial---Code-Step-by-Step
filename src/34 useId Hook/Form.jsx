import { useId } from "react"

const Form = () => {
    const username = useId()
    const password = useId()
    return (
        <form action="" className="flex flex-col gap">
            <div className="flex gap">
                <label htmlFor={username+"username"}>Enter Username</label>
                <input type="text" id={username+"username"} placeholder="enter username" />
            </div>
            <div className="flex gap">
                <label htmlFor={password+"password"}>Enter Password</label>
                <input type="password" id={password+"password"} placeholder="enter password" />
            </div>
            <button>Submit Data</button>
        </form>
    )
}

export default Form