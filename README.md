# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Redux :

Three basic imp parts :

1. Action - What to do
2. Reducer - How to do
3. State - Has current/updated value with the help of Redux store

## WHAT IS REDUX?

1. An open source JS library for managing application state.
2. Recommended for using only with big projects involing complex state management.

## WHY REDUX?

- When a JavaScript application grows big, it becomes difficult for the user to manage its state.

- It can be difficult to pass data from child component to parent component in certain cases.

- Redux solves this problem by managing application's state with a single global object called Store

- Makes Testing very easy

- Consistency throughout the application

---

#### **ACTION**

- An action is a **plain JS object** that describes the intention to cause change(Like ordering something on a button click)
- It has the responsibility to get data from ReactJS UI and pass to the Redux's reducer to put that data into store.
- Action can itself modify data because reducer cant do logic work.
  - An action must have a `type` field like `{ type : 'ORDER' }`
    - So the action and reducer communicates via this `type` key as identifier.
  - Tells what to do but doesnt tell how to do
  - Pure Object example :
  - ```
        return {
        type : "INCREMENT",
        paylaod: num
    }
    ```
- `Action creator` is a pure function which creates an action. Example : incNumber() is the function which creates action
- An action should not keep the recieved data with itself but pass it ahead to the reducer. And if any changes are required to be made on the data that do that and then send it ahead to the reducer but do not keep it with action only.
  - Because the reducer keeps the data in the store so that other components can use it as well.

```
export const incNumber = (num) => {
    return {
        type : "INCREMENT",
        paylaod: num
    }
}
```
- To call any action, we need to use `dispatch()` in the UI component. But the dispatch method is recieved from a hook called `useDispatch()`.
  - It's a hook to access the redux dispatch function. 

#### **REDUCER**

- A reducer is a function that determines changes to an application's state, return the new state and tell the store how to do.
- Reducer handles data for store

```bash
ACTION ---→	 REDUCER ---→ STORE
    ↑                       |
    |                       |
    |-------VIEWS ←---------|
```

- Reducers are functions that take `current state` and an `action` both as arguements and return a `new state`.
- Rules : 
  - Always need a root reducer for creating store.
  - Reducer must have some initial value.
  - Reducer must have a `return` statement and must return something.
- Usually `switch` case is used in reducer to filter the action types as `if` blocks are not suitable for lots of cases. One might not be very certain that how many actions would be created in future for that one reducer.
- Example : Fruit making machine with 3 parts like redux which are : 1. Action(moving the handle), 2. Reducer(machine crushing fruit), 3. State(Juice result)

#### **REDUX STORE**

- Redux store brings together state, actions and reducers of the app
- Only a single centralised store is there for the app
- It is basically a reducer only with root reducer. Meaning it creates a store using root reducer only.

#### **REDUX PRINCIPLES**

1. Single store is the single source of truth
2. State is read-only and to change it there needs to be a dispatch of an action
3. Immutability in data (data is consistent and not changing), one way data flow and predictibilty of the outcome
4. Changes are made with 'Pure Reducer Function' means if same argument is passed then same outcome will come.

--

UI Views - Kid
Action creators - Parents - will send 2 things: Type & Payload.
(parents dispatching msg via Whatsapp to mad boy for kid's demands)
Reducer - Can be a real world entity like Mad boy
(Mad boy fulfills demands of kid from redux store)

### [Redux Flow chart](https://i.ibb.co/VpdCXmB/ecdbd6fa-5433-42cb-ac71-21ecadf49142.jpg)

## Installation :

```
npm i redux react-redux
```

---

Project steps :

1. There are 3 main imp files in a redux project :
   1. Actions
   2. Reducer
   3. Store
2. When we make a react app with redux, we need a wrapper to wrap the whole react app with the redux's Provider so that we can get the data from redux store into view layer and dispatch actions from view layer to the actionControllers.
3. So, add a `<Provider>` wrapper around the App component in `index.js` or `main.js`. It'll give error without passing `store` as props to it.
4. Make a store which would be needed to pass into the Provider. 
5. Now to create a store, a reducer is also needed. So also make root reducer.
6. Made an action which gets data from the view layer when an action gets dispatched from the UI component.




4. Gave appropriate CSS and View template
5. Made actions
6. Made Reducers and index.js to combine all reducers
7. Made store to
8. Got the state from the store inside app's index.js
9. Using `Provider` in the index.js for App
10. Getting state via useSelector() hook in the App.js and updating it via useDispatch()

---

- ReactJS has `useContext` hooks which works similar like redux
- But Redux has `useSelector` hook to deal with states

---
