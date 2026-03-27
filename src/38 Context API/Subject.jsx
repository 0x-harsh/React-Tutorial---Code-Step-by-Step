import { useContext } from "react"
import { SubjectContext } from "./ContextData"

const Subject = () => {
    const subject = useContext(SubjectContext)
    return (
        <div style={{ border: "1px solid #888", backgroundColor: "#666", padding: "1rem", textTransform: "capitalize" }} className="flex flex-col gap">
            Subject: {subject}
        </div>
    )
}

export default Subject