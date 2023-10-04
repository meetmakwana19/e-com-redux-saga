import { createStore } from "redux";

const dummyReducer = () => {
    return "Dummy reducer";
}
const store = createStore(dummyReducer)

export default store;