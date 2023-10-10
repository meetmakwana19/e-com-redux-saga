// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducer";

// const dummyReducer = () => {
//   return "Dummy reducer";
// };

// const store = createStore(dummyReducer)
// const store = createStore(rootReducer)
const store = configureStore({ reducer: rootReducer });

export default store;
