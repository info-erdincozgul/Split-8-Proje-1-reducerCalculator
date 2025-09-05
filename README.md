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
* You will learn how to use React's useReducer hook to manage complex state logic. The project uses a single reducer to handle all state transitions for a calculator, including tracking the current total, the pending operation, and a separate memory value.
* You will learn to implement the Action/Reducer pattern, a scalable approach to state management. The project separates concerns by defining action types and creator functions in actions.jsx and the state-updating logic in the reducer function in reducers.jsx. This makes the state changes predictable and easier to debug.
* You will learn to build a clean, modular application using a component-based structure. The project separates UI elements into reusable components like TotalDisplay and CalcButton, which are then composed within the main App component.
* You will gain experience handling user input and events in a React application. The App.jsx component defines various event handlers that listen for button clicks and dispatch corresponding actions to the reducer, effectively translating user interactions into state updates.
* You will learn how to pass data and event handlers down the component tree using props, allowing child components like CalcButton to be configurable and interactive.
