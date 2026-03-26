import { useActionState } from "react"

const App = () => {
    const handleSubmit = async (previousData, formData) => {
        let name = formData.get('name')
        let password = formData.get('password')
        await new Promise((res) => setTimeout(res, 2000))
        console.log("handlesubmit called", name, password)
        if (name && password) {
            return { message: 'Data Submitted', name, password }
        } else {
            return { error: 'Failed to Submit, Enter Data Correctly', name, password }
        }
    }
    const [data, action, pending] = useActionState(handleSubmit)
    console.log(data)
    return (
        <div className="flex flex-col gap">
            <h1>useAction Hook in ReactJS</h1>
            <form action={action} className="flex flex-col gap">
                <input defaultValue={data?.name} type="text" placeholder="Enter Name" name="name" />
                <input defaultValue={data?.password} type="password" placeholder="Enter Password" name="password" />
                <button disabled={pending}>{pending ? "Working..." : "Submit Data"}</button>
                {
                    data?.error && <span style={{ color: 'red' }}>{data?.error}</span>
                }
                {
                    data?.message && <span style={{ color: 'green' }}>{data?.message}</span>
                }
            </form>
            <div>Name: {data?.name}</div>
            <div>Password: {data?.password}</div>
        </div>
    )
}

export default App