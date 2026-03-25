let count = 0

const App = () => {
    return (
        <div>
            <Counter />
            <Counter />
            <Counter />
            <Counter />
            <Counter />
        </div>
    )
}

const Counter = () => {
    count = count + 1
    return (
        <h1>Counter {count}</h1>
    )
}

export default App