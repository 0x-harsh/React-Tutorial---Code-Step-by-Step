const College = ({ college, idx }) => {
    return (
        <div key={idx} style={{
            padding: "1rem",
            margin: "0.5rem 1rem",
            backgroundColor: "#222",
            borderRadius: "0.5rem",
            border: "1px solid #888"
        }}>
            <div>College Name: <b>{college.name}</b></div>
            <ul>
                <li>Website: {college.website}</li>
                <li>City: {college.city}</li>
            </ul>
            <div>Students:</div>
            <ul className="flex gap" style={{
                flexWrap: "wrap"
            }}>
                {
                    college.students.map((student) => {
                        return (
                            <li style={{
                                padding: "0.5rem 1rem",
                                backgroundColor: "#222",
                                borderRadius: "0.5rem",
                                border: "1px solid #888"
                            }}>
                                <div>Name: {student.name}</div>
                                <div>Age: {student.age}</div>
                                <div>Email: {student.email}</div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default College