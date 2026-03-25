import { useFormStatus } from "react-dom"

const App = () => {
    const handleSubmit = async () => {
        await new Promise(res => setTimeout(res, 2000))
        console.log("form submitted")
    }

    const CustomerForm = () => {
        // const ufs = useFormStatus()
        // console.log(ufs)
        const { pending } = useFormStatus()
        console.log("form submitted: " + pending)
        return (
            <>
                <input type="text" placeholder="Enter Name" />
                <input type="text" placeholder="Enter Password" />
                <button disabled={pending}>{pending ? "Submiting..." : "Submit"}</button>
            </>
        )
    }

    return (
        <div>
            <h1>useFormStatus in ReactJS</h1>
            <form action={handleSubmit} className="flex flex-col gap">
                <CustomerForm />
            </form>
        </div>
    )
}

export default App