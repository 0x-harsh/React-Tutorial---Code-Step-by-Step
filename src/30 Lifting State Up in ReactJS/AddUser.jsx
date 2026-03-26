const AddUser = ({ setUser }) => {
    return (
        <div>
            <h1>Add User</h1>
            <input type="text" placeholder="Enter Name of User" onChange={(event)=>{setUser(event.target.value)}} />
        </div>
    )
}

export default AddUser