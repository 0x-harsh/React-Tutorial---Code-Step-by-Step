import { useEffect } from "react"

const Counter = ({ counter, data }) => {
    function getCounter() {
        console.log("call only!")
    }

    function getData() {
        console.log("getData called")
    }

    useEffect(() => {
        getCounter()
    }, [counter]) // depends on counter

    useEffect(() => {
        getData()
    }, [data]) // depends on data

    return (
        <div>
            <h1>{counter}</h1>
            <h1>{data}</h1>
        </div>
    )
}

export default Counter