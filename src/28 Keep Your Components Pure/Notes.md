# Keep Your Components Pure

## Pure Functions
- Pure Functions: functions that returns an output based on an input are known as pure functions
- It returns same output if input is same
```javascript
function double (input) {
        return 2 * input
}
```

## Pure Components
- Pure Components: Components that does not affect the outside things (variables etc)
```jsx
let data = 20

const App = () => {
    return (
        <div>App</div>
    )
}

export default App
```
```jsx
const Counter = ({ counter }) => {
    return (
        <div>{counter}</div>
    )
}

export default Counter
```

## Impure Component Example (Avoid It)
```jsx
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
```

*Output:*
```txt
Counter 2
Counter 4
Counter 6
Counter 8
Counter 10
```

- Output is wierd so its not recommended