# Styling React using CSS

## How many types of style we have in React JS?
- Inline Style
- External Style
- CSS Modules
- Styled Components
- External CSS Library/Framework

## Inline Style
- Use the style attribute directly on your elements.
- Bit different from basic css

```jsx
<div style={{ color: 'blue', fontSize: '16px' }}>Hello World!</div>
```

## External Style
- Make separate file for css
- And import to components

```css
/* style.css */
.container {
    background-color: lightgray;
    padding: 20px;
}
```

## CSS Modules
- Similar to external CSS files.
- But ensures that styles are locally scoped to a specific component

```css
/* MyComponent.module.css */
.container {
    background-color: lightgray;
    padding: 20px;
}
```

## Styled Components
- In React, styled-components is a library that allows you to write CSS directly within your JavaScript components.
- This approach is known as CSS-in-JS.
```jsx
import styled from 'styled-components'

const Button = styled.button`
    background-color: ${props => props.primary ? 'blue' : 'gray'};
    color: white;
    padding: 10px 20px;
    border: none;
`;
```

## Utility-First Libraries
- Material UI
- React Bootstrap
- Tailwind CSS