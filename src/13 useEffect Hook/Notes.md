# useEffect Hook

## Use of useEffect Hook
- Remove side effect inside component.
- Remove side effect from outside component.
- Use to fetch data.
- Can use as life cycle methods.
- Can use for DOM manipulation.
- Much More.

## Basic use of useEffect
- Prevent Extra rendering of component on state.
- Very important for interview.

## Syntax of useEffect
- First we import useEffect from react library
```javascript
import { useEffect } from 'react'
```
```javascript
useEffect(pass function as parameter, dependency)
useEffect(() => {
    // Write your Code
}, [state or props])
```

## Handling Dependency
```javascript
useEffect(() => {
    // call every time
})
```
```javascript
useEffect(() => {
    // call only once
}, [])
```
```javascript
useEffect(() => {
    // call on changing single state
}, [state1])
```
```javascript
useEffect(() => {
    // call on changing both states
}, [state1, state2])
```
```javascript
useEffect(() => {
    // call on changes props
}, [props1, props2])
```