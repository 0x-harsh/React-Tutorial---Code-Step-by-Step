# Add Bootstrap in ReactJS

## Installation
```bash
npm install react-bootstrap bootstrap
```

## Style sheet to import into `main.jsx` or `App.jsx`
```jsx
import 'bootstrap/dist/css/bootstrap.min.css'
```

## Importing Components
```jsx
import Button from 'react-bootstrap/Button'
```
or
```jsx
import { Button } from 'react-bootstrap'
```

## Using Components
```jsx
const App = () => {
    return (
        <Button>Ok</Button>
    )
}
```