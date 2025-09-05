# React Calculator
## About the Project
This project is a basic calculator application. Users can perform simple calculations using numbers and arithmetic operations (+, -, *, /). The application displays the values entered by the user and calculates the result with the = button. It also includes memory functions (M+, MR, MC).

The most important feature of the project is that its state is managed with the useReducer hook. This approach allows the application's state (total, operation, memory, temp) to be managed by a single, centralized reducer function. This provides a cleaner and more scalable code structure compared to useState, especially in cases where the state change logic is complex.
## Key Features
* State Management:
    * The application's state is managed using the useReducer hook within App.jsx.
    * A reducer function is defined in the reducers.jsx file that determines how the state changes based on different actions (APPLY_NUMBER, CHANGE_OPERATION, EQUALS, MEMORY_ADD, etc.).
* Actions:
    * The actions.jsx file defines the action types (APPLY_NUMBER, CHANGE_OPERATION, EQUALS, CLEAR_DISPLAY, etc.) and corresponding action creators that are used to trigger state changes.
* Memory Functions:
    * M+ (memory add): Adds the current value to the memory.
    * MR (memory recall): Recalls the value stored in memory to the display.
    * MC (memory clear): Clears the memory.
* Component-Based Structure:
* The application has a modular structure, separating the display (TotalDisplay.jsx) and buttons (CalcButton.jsx) into different components.
* User Interface: The application has a simple and easy-to-use user interface.
## Project Structure
src/:
* App.jsx: The main component that manages the core state using the useReducer hook and renders other components.
* components/:
    * TotalDisplay.jsx: The component representing the calculator's display.
    * CalcButton.jsx: The component representing the calculator's buttons.
* /store/:
    * actions.jsx: Defines the action types and actions that trigger state changes.
    * reducers.jsx: Contains the reducer function that determines how the state is updated.
## How to Run
To run this project on your local machine, you need to have Node.js and npm installed.
1. Install Required Packages:
```
Bash
npm install
```
2. Start the Application:
```
Bash
npm run dev
```
3. View in Browser: After running the command, your project will typically open automatically at http://localhost:5173/.
## Learning Outcomes
By exploring or working on this project, you can gain experience in the following areas:
* You will learn how to manage and share a global state across your application using the React Context API. The project demonstrates how to create a custom context provider (AuthContextProvider, ProductContextProvider, CartContextProvider) to make data accessible to any component wrapped within it, effectively replacing prop drilling for shared data.
* You will learn to create a reusable custom hook, such as useLocalStorage, to abstract common logic. This hook provides a way to interact with the browser's localStorage to persist state, ensuring data like the shopping cart or user authentication status remains even after a page refresh.
* You will learn to implement navigation within a single-page application using React Router. The project uses BrowserRouter, Route, and Switch components to define different views and manage navigation between them without full page reloads. You'll also see how to create a PrivateRoute component to protect routes, ensuring only authenticated users can access them.
* The project demonstrates how to fetch data from a mock API using Axios. You'll see how to use the useEffect hook to perform side effects, such as fetching data on component mount, and the useState hook to store and manage the fetched data.
* You will learn to simplify form management and validation using the React Hook Form library. This project shows how to register form inputs, handle submissions, and display validation errors with minimal code, providing a better user experience for forms like the login and add friend forms.