import { useState } from "react"

const App = () => {
    const cardCont = {
        display: "flex",
        gap: "1rem",
        flexWrap: "wrap",
    }

    const [cardStyle, setCardStyle] = useState({
        border: "1px solid #666",
        borderRadius: "0.25rem",
        boxShadow: "1px 1px 5px #222",
        alignItems: "center",
        textAlign: "center",
        flexShrink: "0",
        color: "#fff",
        backgroundColor: "#222",
        padding: "2rem 1rem"
    })

    const profileIcon = {
        height: "4rem",
        width: "4rem",
        border: "1px solid #666",
        borderRadius: "50%"
    }

    return (
        <div className="flex flex-col gap">
            <div className="flex gap" style={{ alignItems: "center" }}>
                <h1>Inline Style in ReactJS</h1>
                <div className="flex gap">
                    <button onClick={() => { setCardStyle({ ...cardStyle, backgroundColor: "#fff", color: "#111" }) }}>Light Theme</button>
                    <button onClick={() => { setCardStyle({ ...cardStyle, backgroundColor: "#222", color: "#fff" }) }}>Dark Theme</button>
                </div>
            </div>
            <div style={cardCont}>
                <div className="flex flex-col gap" style={cardStyle}>
                    <div style={profileIcon}></div>
                    <div>
                        <div><b>Harsh Dhiman</b></div>
                        <div>Software Developer</div>
                    </div>
                </div>
                <div className="flex flex-col gap" style={cardStyle}>
                    <div style={profileIcon}></div>
                    <div>
                        <div><b>Harsh Dhiman</b></div>
                        <div>Software Developer</div>
                    </div>
                </div>
                <div className="flex flex-col gap" style={cardStyle}>
                    <div style={profileIcon}></div>
                    <div>
                        <div><b>Harsh Dhiman</b></div>
                        <div>Software Developer</div>
                    </div>
                </div>
                <div className="flex flex-col gap" style={cardStyle}>
                    <div style={profileIcon}></div>
                    <div>
                        <div><b>Harsh Dhiman</b></div>
                        <div>Software Developer</div>
                    </div>
                </div>
                <div className="flex flex-col gap" style={cardStyle}>
                    <div style={profileIcon}></div>
                    <div>
                        <div><b>Harsh Dhiman</b></div>
                        <div>Software Developer</div>
                    </div>
                </div>
                <div className="flex flex-col gap" style={cardStyle}>
                    <div style={profileIcon}></div>
                    <div>
                        <div><b>Harsh Dhiman</b></div>
                        <div>Software Developer</div>
                    </div>
                </div>
                <div className="flex flex-col gap" style={cardStyle}>
                    <div style={profileIcon}></div>
                    <div>
                        <div><b>Harsh Dhiman</b></div>
                        <div>Software Developer</div>
                    </div>
                </div>
                <div className="flex flex-col gap" style={cardStyle}>
                    <div style={profileIcon}></div>
                    <div>
                        <div><b>Harsh Dhiman</b></div>
                        <div>Software Developer</div>
                    </div>
                </div>
                <div className="flex flex-col gap" style={cardStyle}>
                    <div style={profileIcon}></div>
                    <div>
                        <div><b>Harsh Dhiman</b></div>
                        <div>Software Developer</div>
                    </div>
                </div>
                <div className="flex flex-col gap" style={cardStyle}>
                    <div style={profileIcon}></div>
                    <div>
                        <div><b>Harsh Dhiman</b></div>
                        <div>Software Developer</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App