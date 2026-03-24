# Life cycle in React
- Life cycle of ReactJS and Human are similar

## Life cycle in Human
`Birth` => `Growth` => `Expire`
- [Human Life Cycle Diagaram](../assets/HumanLifeCycle.jpg)

## Life cycle in ReactJS (React Life Cycle Methods)
Mounting => Updating => Unmounting
- [React Life Cycle Diagaram](../assets/ReactLifeCycle.jpg)

- `Mounting` : Creation of element
- `Updating` : Change in element
- `Unmounting` : Removal of element

### Note :
- We can execute tasks when life cycle changes using useEffect method

## Life cycle in ReactJS

```javascript
useEffect(() => {
    // This code will run on mount
}, [])
```

```javascript
useEffect(() => {
    // This code will run on update
}, [state or props])
```

```javascript
useEffect(() => {
    
    return () => {
        // This code will run on unmount
    }
}, [])
```

```javascript
useEffect(() => {
    // This code will run on every life cycle event
})
```

