# npm init 
- creates a package.json file for a Node.js project, defining project details, dependencies, and scripts, ensuring standardized configuration and easy dependency management.

# npm install -D parcel 
- installing parcel bundler 

# npx parcel index.html 
- This will host our website on a local server which will be done by parcel.

# npm i react 

# npm i react-dom

# Parcel
- Dev Build/Local Server
- HMR - Hot Module Replacement
- File Watching ALgorithm - written in C++
- Caching - Faster Builds (Stores previously fetched resources locally to speed up future builds.)
- Image Optimization - Reduces image file sizes without sacrificing quality for faster loading.
- Minification - Removes unnecessary characters from code to reduce its size.
- Bundling - Combines multiple files into a single bundle for efficient delivery.
- Compress - Further reduces file sizes using techniques like gzip.
- Consistent Hashing - Generates unique hashes based on file contents for cache management.
- Code Splitting - Breaks code into smaller parts to load only what's needed, improving performance.
- Differential Bundling - Support Older browsers
- Diagonistic - Provides tools for diagnosing and managing errors during development.
- Error Handling - efficiently handles error and provide suggestions for it. 
- HTTP - Facilitates communication between clients and servers using the Hypertext Transfer Protocol.
- Tree Shaking - removes unused codes
- different dev and prod bundles - Automatically adjusts bundles for development (with source maps, faster builds) and production (minification, optimization for performance).

# JSX 
- takes care of the Cross-Site Scripting - malicious Scripts

# keys
- Unique Keys >>>> Index as keys >>>> Not using keys (not acceptable)

# Exports
- Two types of exports
    - Default export 
    - Named export
- Two types of imports
    - Default import 
    - Named import

# Reconciliation Algorithm
- In React, the reconciliation algorithm is not explicitly named "React Fiber"; rather, React Fiber refers to an internal reimplementation of the React core algorithm. Reconciliation in React is the process of updating the UI to match the most recent state of the application. It's crucial for React to efficiently determine what changes need to be applied to the DOM when the state or props of components change.

    - Virtual DOM: React maintains a lightweight representation of the DOM known as the virtual DOM. When components update, React first updates the virtual DOM rather than the actual DOM.

    - Diffing Algorithm: React's reconciliation process involves a diffing algorithm that compares the new virtual DOM with the previous one to determine the minimal set of changes needed. This process is efficient because it minimizes the number of updates to the actual DOM.

    - React Fiber: React Fiber is a complete rewrite of the React core algorithm. It's designed to improve the performance and flexibility of React's reconciliation process, particularly in handling complex component trees and supporting concurrent rendering (the ability to pause and resume rendering work).

        - Incremental Rendering: Fiber allows React to split rendering work into chunks (fiber units), making it possible to prioritize updates and support features like suspense and concurrent rendering.

        - Prioritization and Scheduling: With Fiber, React can prioritize different types of updates (e.g., user interactions vs. background updates) and schedule them accordingly, improving perceived performance and responsiveness.

        - Error Handling: Fiber enhances error boundaries and error handling within React components, making it more resilient to errors during rendering.


# Monolith Architecture
- Monolith architecture is a software design approach where an entire application is built and deployed as a single, unified unit. All components and functionalities are interconnected and managed together within one codebase. This approach simplifies development and deployment but can become difficult to maintain and scale as the application grows in complexity.
- codebase : A codebase is the complete collection of source code for a software project. It includes all the files, directories, and resources necessary for building, testing, and deploying the application.

# Microservices
- Microservices is an architectural style that structures an application as a collection of small, independent, and loosely coupled services. Each service focuses on a specific business function, can be developed, deployed, and scaled independently, and typically communicates with other services through APIs.

# why do we always have to use super in the class based component to access props 
- In React class components, `super(props)` in the constructor initializes the component properly, allowing you to access `this.props` throughout the class methods. It's necessary because `this.props` directly refers to the props passed to the component instance, and `super(props)` ensures these props are correctly initialized before any other operations within the component. This setup maintains consistency and clarity in how props are accessed and used within class-based components in React.

# what is react component lifecycle method?
- The React component lifecycle refers to the sequence of stages a React component goes through from birth (initialization) to death (removal from the DOM). Here's a concise summary of the lifecycle methods:

1. **Mounting**:
   - `constructor()`: Initializes state and binds event handlers.
   - `static getDerivedStateFromProps()`: Prepares the initial state derived from props (rarely used).
   - `render()`: Returns React elements to be rendered.
   - `componentDidMount()`: Executes after the component is rendered to the DOM, useful for initialization (e.g., API calls).

2. **Updating**:
   - `static getDerivedStateFromProps()`: Updates state based on props changes.
   - `shouldComponentUpdate()`: Controls if the component should re-render.
   - `render()`: Re-renders the component.
   - `getSnapshotBeforeUpdate()`: Captures current DOM state before changes (e.g., scrolling position).
   - `componentDidUpdate()`: Executes after component updates, for side effects (e.g., network requests).

3. **Unmounting**:
   - `componentWillUnmount()`: Executes just before the component is removed from the DOM, useful for cleanup (e.g., canceling timers).

4. **Error Handling**:
   - `static getDerivedStateFromError()`: Updates state when a child component throws an error.
   - `componentDidCatch()`: Handles errors during rendering, useful for displaying fallback UI.

These methods allow developers to manage state, respond to props changes, perform side effects, and handle errors effectively throughout the lifecycle of a React component.

# React Lifecycle Diagram Link for in-depth understanding of it
- https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/ 
- DOM manipulation or updating the DOM is an expensive tasks that's why react batches the render or batchthe componentdidmount together to speed up or optimize the process.

- parent constructor
- parent render
   - first child constructor
   - first child render

   - second child constructor
   - second child render

   - DOM is updated in SINGLE BATCH
   - first child componentDidMount
   - second child componentDidMount
- parent componentDidMount

- Render phase of all child batched together 
- Commit phase of all child batched together

# Tailwind and Postcss
- PostCSS is used with Tailwind CSS to efficiently process and optimize the CSS output generated by Tailwind, making it smaller and faster for production websites.

# Higher Order Functions
- A higher-order function (HOF) in React is a function that takes another function as an argument or returns a function as its result. In the context of React components, a common type of HOF is a higher-order component (HOC).

- Higher-Order Component (HOC)
- Definition: An HOC is a function that takes a component and returns a new component with additional functionality.
- Purpose: HOCs are used to share common logic between components without duplicating code.

# Controlled vs. Uncontrolled Components in React
- Controlled Components:

- Definition: A component where form input values are controlled by the component's state.
- Characteristics:
The input's value is bound to the component's state.
Any change in the input triggers an onChange event handler, updating the state.
The state is the single source of truth for the input value.
 
- Uncontrolled Components:

- Definition: A component where form input values are managed by the DOM itself, rather than by the component's state.
- Characteristics:
The input's value is managed by the DOM.
A ref is used to access the input's current value.
The component does not re-render on input changes.

# Key Differences:
- State Management:

   - Controlled Components: The state is the source of truth. The input's value is always synced with the component's state.
   - Uncontrolled Components: The input's value is managed by the DOM. Refs are used to access the value when necessary.

- Re-rendering:

   - Controlled Components: The component re-renders on every input change as the state updates.
   - Uncontrolled Components: The component does not re-render on input changes. The input's value is accessed only when needed.

- Use Case:

   - Controlled Components: Preferred for real-time validation, instant feedback, or keeping form data in sync with the component state.
   - Uncontrolled Components: Preferred for simpler forms or when performance is a concern and handling every input change is unnecessary.

# Props Drilling in React
- Definition:
Props drilling is the process of passing data from a parent component to deeply nested child components through multiple intermediary components.

- Problems:

Verbose Code: Intermediate components receive and pass unnecessary props.
Management Difficulty: Tracing and managing data flow becomes hard.
Scalability Issues: More complex as the component tree grows.

- Solutions:

Context API: Share data across components without passing props manually.
State Management Libraries: Use Redux or MobX for global state management.


# Context in React
- Definition:
Context provides a way to share values between components without having to explicitly pass props through every level of the tree.

- Benefits:

Avoids props drilling.
Makes global data easily accessible.
Simplifies component structure and data flow.

- Drawbacks:

Can make components less reusable.
Overuse can lead to tightly coupled components.


# UserContext.Consumer 
- takes a callback function

# Redux is not Mandatory 
- Redux is used for managing state 
- Applicatins become easier to debugg 
- Use Redux only when there is a large scale application where there is a lot of data and lots of components .It can also be build without using Redux too.
- React and Redux are different libraries which we install in out project then we use Redux capabilities

# Redux 
- Definition : Redux is a state management library for JavaScript applications, commonly used with React. It centralizes the application's state and logic, making it easier to manage and debug complex applications by enforcing a unidirectional data flow. 

- In Redux, a slice is a way to manage a portion of your application's state, along with the reducers and actions that interact with that state. It typically groups related state logic together, making it easier to manage and scale your Redux store.

# Redux install
- install @reduxjs/toolkit and react-redux
- Build our own Store
- Connect our store to our App
- Create a Cart Slice 
- Dispatch action
- read the data using Selector