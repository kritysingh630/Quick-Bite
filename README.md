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