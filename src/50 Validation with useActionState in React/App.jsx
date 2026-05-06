import { useActionState } from "react"

const App = () => {
    const handleLogin = (prevData, formData) => {
        let name = formData.get('name')
        let password = formData.get('password')
        let regex = /^[A-Z0-9]+$/i
        console.log(name, password)

        if (name.length > 5) {
            return { error: 'Name should not contain more than 5 characters', name, password }
        } else if (!regex.test(password)) {
            return { error: 'Password can contain only numbers and alphabets', name, password }
        } else {
            return { message: 'submitted successfully', name, password }
        }
    }
    const [data, action, pending] = useActionState(handleLogin)
    console.log(data)
    return (
        <div>
            <h1>Validation with useActionState in React</h1>
            {
                data?.message ? <span className="green">{data?.message}</span> : ''
            }
            {
                data?.error ? <span className="red">{data?.error}</span> : ''
            }
            <form action={action} className="flex flex-col gap-4">
                <input type="text" placeholder="Enter Full Name" name="name" defaultValue={data?.name} />
                <input type="text" placeholder="Enter Password" name="password" defaultValue={data?.password} />
                <button disabled={pending || data?.error}>{pending ? 'Submiting...' : 'Submit'}</button>
            </form>
        </div>
    )
}

export default App