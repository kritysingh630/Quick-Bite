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