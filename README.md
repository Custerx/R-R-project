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
