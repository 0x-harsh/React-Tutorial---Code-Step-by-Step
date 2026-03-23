const App = () => {
    const userName = ['Harsh', 'Amit', 'Sahil', 'Kashish', 'Neha', 'Harjeet']

    const userData = [
        {
            name: 'Harsh',
            age: 19,
            email: 'harsh@test.com',
            id: 1
        },
        {
            name: 'Amit',
            age: 19,
            email: 'amit@test.com',
            id: 2
        },
        {
            name: 'Sahil',
            age: 20,
            email: 'sahil@test.com',
            id: 3
        },
        {
            name: 'Kashish',
            age: 19,
            email: 'kashish@test.com',
            id: 4
        },
        {
            name: 'Neha',
            age: 19,
            email: 'neha@test.com',
            id: 5
        },
        {
            name: 'Harjeet',
            age: 19,
            email: 'harjeet@test.com',
            id: 6
        },
    ]
    return (
        <div>
            <h1>Loop in JSX with map function</h1>
            <table border={"1"}>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>AGE</th>
                    <th>EMAIL</th>
                </tr>
                {userData.map((value, index) => {
                    return (
                        <tr key={index}>
                            <td>{value.id}</td>
                            <td>{value.name}</td>
                            <td>{value.age}</td>
                            <td>{value.email}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}

export default App