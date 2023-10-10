// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducer";
import createSagaMiddleware from "redux-saga";
import productSaga from "./saga/productSaga";

// const dummyReducer = () => {
//   return "Dummy reducer";
// };

const sagaMiddleware = createSagaMiddleware();
// const store = createStore(dummyReducer)
// const store = createStore(rootReducer)
const store = configureStore({
  reducer: rootReducer,
  middleware: () => [sagaMiddleware],
});

// to dynamically run the saga files
sagaMiddleware.run(productSaga);
// saga(in our case it is productSaga) must be a function which returns a Generator Object. 
// The middleware will then iterate over the Generator and execute all yielded Effects.


export default store;
