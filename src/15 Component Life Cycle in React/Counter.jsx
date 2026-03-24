import { useEffect } from "react"

const Counter = ({ count, data }) => {
    useEffect(() => {
        console.log("mounting phase only!")
    }, [])

    useEffect(() => {
        console.log("update phase only!")
    }, [count])

    useEffect(() => {
        return () => {
            console.log("unmount phase only!")
        }
    }, [])

    return (
        <div>
            <div>Counter Value: {count}</div>
            <div>data Value: {data}</div>
        </div>
    )
}

export default Counter