import Student from "./Student"

const ClassComponent = () => {
    return (
        <div style={{ border: "1px solid #888", backgroundColor: "#444", padding: "1rem", }} className="flex flex-col gap">
            Class Component
            <Student />
        </div>
    )
}

export default ClassComponent