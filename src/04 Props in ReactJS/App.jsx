import User from '../components/User.jsx'
import Wrapper from '../components/Wrapper.jsx'

const App = () => {
    return (
        <div>
            <h1>Props in React JS</h1>
            <User name="Harsh Dhiman" />
            <User name="Harjeet Kaur" />
            <User />
            <Wrapper>
                <p>Hello Everyone</p>
            </Wrapper>
        </div>
    )
}

export default App