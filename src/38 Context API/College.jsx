import ClassComponent from "./ClassComponent"

const College = () => {
    return (
        <div style={{ border: "1px solid #888", backgroundColor: "#333", padding: "1rem", }} className="flex flex-col gap">
            College
            <ClassComponent />
        </div>
    )
}

export default College