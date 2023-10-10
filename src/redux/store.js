import { createStore } from "redux";
import rootReducer from "./rootReducer";

const dummyReducer = () => {
    return "Dummy reducer";
}

// const store = createStore(dummyReducer)
const store = createStore(rootReducer)

export default store;