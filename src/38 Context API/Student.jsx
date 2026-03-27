import Subject from "./Subject"

const Student = () => {
    return (
        <div style={{ border: "1px solid #888", backgroundColor: "#555", padding: "1rem", }} className="flex flex-col gap">
            Student
            <Subject />
        </div>
    )
}

export default Student