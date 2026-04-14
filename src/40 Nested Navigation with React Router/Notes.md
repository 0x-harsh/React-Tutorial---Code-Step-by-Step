# Link vs NavLink in ReactJS

## Link: Used for basic navigation anywhere in your app
## NavLink: Specially designed for navigation menus. it automatically knows when its to path matches the current browser URL and can apply specific "active" classes or styles.

```jsx
<NavLink
    to="/home"
    style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
>Home</NavLink>
```

# Outlet in ReactJS
- for display children if used as Route