import { useState, useTransition } from 'react'

const App = () => {
    const [pending, startTransition] = useTransition()

    const handleButton = async () => {
        startTransition(async () => {
            await new Promise(res => setTimeout(res, 2000))
        })
    }

    return (
        <div>
            <h1>useTransition in ReactJS</h1>
            {
                pending ? <div>Loading...</div> : null
            }
            <button disabled={pending} onClick={handleButton}>{pending ? "loading..." : "Click"}</button>
        </div>
    )
}

export default App

// USNG STATE
// import { useState } from 'react'

// const App = () => {
//     const [pending, setPending] = useState(false)

//     const handleButton = async () => {
//         setPending(true)
//         await new Promise(res => setTimeout(res, 2000))
//         setPending(false)
//     }

//     return (
//         <div>
//             <h1>useTransition in ReactJS</h1>
//             <button disabled={pending} onClick={handleButton}>Click</button>
//         </div>
//     )
// }

// export default App