Rules for React js Hooks
1. Start with use_____
    - useState
    - useId
    - useEffect

2. use Hooks at Top Level
    ```jsx
    export default function App() {
        const [user, setUser] = useState()

        return (
            <div>
                <h1>Hook Rules in ReactJS</h1>
            </div>
        )
    }
    ```

3. Do not Call Hooks:
    - inside conditions or loops
    - after a conditional `return` statement
    - in event handlers
    - in class components
    - inside `try`/`catch`/`finally` blocks

4. Don't call Hooks from regular JavaScript functions. Instead, you can:
    - Call Hooks from React function components.
    - Call Hooks from *custom Hooks*

5. Hook's Name
    ```jsx
    function FriendList() {
        const [onlineStatus, setOnlineStatus] = setOnlineStatus()
        // correct
    }

    function setOnlineStatus() {
        const [onlineStatus, setOnlineStatus] = setOnlineStatus()
        // wrong, contradiction in actual function and hook's function name
    }
    ```

6. Note

    Custom Hooks may call other Hooks (that's their whole purpose). This works because custom Hooks are also supposed to only be called while a function component is rendering.