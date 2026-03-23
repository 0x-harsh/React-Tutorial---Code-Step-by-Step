import College from '../components/College.jsx'
const App = () => {
    const colleges = [
        {
            name: "IET",
            city: "Alwar",
            website: "www.iet.com",
            students: [
                {
                    name: "Anil Sidhu",
                    age: 29,
                    email: "anil@test.com"
                },
                {
                    name: "Amit Kumar",
                    age: 20,
                    email: "amit@test.com"
                },
                {
                    name: "Chakshu Kamboj",
                    age: 20,
                    email: "chakshu@test.com"
                }
            ]
        },
        {
            name: "IIT Delhi",
            city: "Delhi",
            website: "www.iitdelhi.com",
            students: [
                {
                    name: "Anil Sidhu",
                    age: 29,
                    email: "anil@test.com"
                },
                {
                    name: "Amit Kumar",
                    age: 20,
                    email: "amit@test.com"
                },
                {
                    name: "Chakshu Kamboj",
                    age: 20,
                    email: "chakshu@test.com"
                }
            ]
        },
        {
            name: "KCIET Hisar",
            city: "Hisar",
            website: "www.kciet.com",
            students: [
                {
                    name: "Anil Sidhu",
                    age: 29,
                    email: "anil@test.com"
                },
                {
                    name: "Amit Kumar",
                    age: 20,
                    email: "amit@test.com"
                },
                {
                    name: "Chakshu Kamboj",
                    age: 20,
                    email: "chakshu@test.com"
                }
            ]
        },
    ]
    return (
        <div>
            <h1>Nested Looping with Component</h1>
            {
                colleges.map((college, idx)=> {
                    return (
                        <College college={college} idx={idx}  />
                    )
                })
            }
        </div>
    )
}

export default App