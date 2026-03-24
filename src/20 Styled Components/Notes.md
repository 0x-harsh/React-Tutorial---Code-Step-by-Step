# Styled Components in ReactJS

## Use this command to install `styled-components` first
```bash
npm i styled-components
```

## Styled Components Example
```jsx
import styled from "styled-components"

const App = () => {
    const Heading = styled.h1`
        color:red;
        border: 1px solid green;
        border-radius: 5px;
        padding: 20px;
    `

    const Para = styled.p({
        color: "white",
        border: "1px solid green",
        borderRadius: "5px",
        padding: "20"
    })

    return (
        <Heading>Styled Component with ReactJS</Heading>
        <Para>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, placeat exercitationem sequi quaerat dolorum sunt excepturi a consequuntur itaque assumenda dolor error dicta magni repellat natus eveniet voluptate inventore omnis totam reprehenderit accusamus quo beatae? Voluptas, iure! Blanditiis libero impedit dignissimos ex alias nisi ea.</Para>
    )
}
```