// FORWARD REF IN REACT 19 AND EARLIER
// import { forwardRef } from "react"

// const Input = (props, ref) => {
//     return (
//         <div className="flex flex-col gap">
//             <input ref={ref} type="text" />
//         </div>
//     )
// }

// export default forwardRef(Input)

// FORWARD REF IN REACT 19 AND LATER
const Input = ({ ref }) => {
    return (
        <div className="flex flex-col gap">
            <input ref={ref} type="text" />
        </div>
    )
}

export default Input