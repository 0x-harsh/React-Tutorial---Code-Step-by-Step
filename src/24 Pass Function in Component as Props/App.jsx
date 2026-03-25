import User from './User.jsx'

const App = () => {
    const displayName = (name) => {
        alert("Hello " + name)
    }
    return (
        <div className="flex flex-col gap">
            <h1>Pass Function in Component as Props</h1>
            <div className="flex flex-col gap">
                <User displayName={displayName} name='Harsh Dhiman' />
                <User displayName={displayName} name='Kashish Kamboj' />
                <User displayName={displayName} name='Amit Saini' />
                <User displayName={displayName} name='Neha Sharma' />
            </div>
        </div>
    )
}

export default App