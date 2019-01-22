# 

### webpack.config.js
For every file with a js or jsx extension Webpack pipes the code through babel-loader for transforming ES6 down to ES5.

## Container / Presentational principle
The Container / Presentational principle is a pattern for React components. The container component is the one that carries all the logic: functions for handling state changes, internal component state and so on.

In contrast a presentational component is merely used for displaying the intended markup. Presentational components are plain JavaScript functions receiving data from the container component as props.

Container Components: https://medium.com/@learnreact/container-components-c0e67432e005

Presentational Components: https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0

### Prop Types
Used to document the React components.

### Typescript React code snippets

### ESLINT
Helps to maintain a consistent JavaScript and React code style in the project.

### webpack-dev-server
Will launch your application inside a browser. Every time a file is saved after a modification, the webpack dev server will automatically refresh the browser’s window.

### Redux
Redux solves a problem that might not be clear in the beginning: it helps giving each React component the exact piece of state it needs.

Redux holds up the state within a single location.

Also with Redux the logic for fetching and managing the state lives outside React.
Redux have a cost: it add another layer of abstraction to your application.

#### Consider using Redux when
1. Multiple React components needs to access the same state but do not have any parent/child relationship.
2. It start to feel awkward passing down the state to multiple components with props.

https://www.valentinog.com/blog/redux/

#### Store
The store orchestrates all the moving parts in Redux. The Redux store is fundamental: the state of the whole application lives inside the store.

So to start playing with Redux we should create a store for wrapping up the state.

#### Reducers
The most important concept here is that the state in redux comes from reducers. Let’s make it clear: reducers produce the state of your application.

A reducer is just a JavaScript function. A reducer takes two parameters: the current state and an action.

In a typical React component the local state changes in place with setState. In Redux you cannot do that. The third principle of Redux says that the state is immutable and cannot change in place.

This is why the reducer must be pure. A pure function is one that returns the exact same output for the given input.

It should return at least the initial state when no action type matches. When the action type matches a valid clause the reducer calculates the next state and returns a new object.

##### combineReducers
The reducer will grow as the app will become bigger. A tip is to split a big reducer into separate functions and combine them with combineReducers.

#### Actions
How does a reducer know when to produce the next state?

The second principle of Redux says the only way to change the state is by sending a signal to the store. This signal is an action. “Dispatching an action” is the process of sending out a signal.

Redux actions are nothing more than JavaScript objects. Every action needs a type property for describing how the state should change. It is a best pratice to wrap every action within a function. Such function is an action creator. 

##### Constants
The type property is nothing more than a string. The reducer will use that string to determine how to calculate the next state. Since strings are prone to typos and duplicates it’s better to have action types declared as constants.This approach helps avoiding errors that will be difficult to debug.

#### Avoiding mutations in Redux
1. Using concat(), slice(), and …spread for arrays
2. Using Object.assign() and …spread for objects

#### Redux API
1. getState for accessing the current state of the application
2. dispatch for dispatching an action
3. subscribe for listening on state changes (already implemented observer pattern?)

### React-redux
react-redux is a Redux binding for React. It’s a small library for connecting Redux and React in an efficient way.

#### Connect
A method that connects a React component with the Redux store.

##### mapStateToProps
Connects a part of the Redux state to the props of a React component. By doing so a connected React component will have access to the exact part of the store it needs.

##### mapDispatchToProps
mapDispatchToProps connects Redux actions to React props. This way a connected React component will be able to dispatch actions.

#### Provider
Provider is an high order component coming from react-redux. Provider wraps up your React application and makes it aware of the entire Redux’s store.

Provider wraps up your entire React application. Moreover it gets the store as a prop.

