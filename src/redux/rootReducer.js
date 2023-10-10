import { combineReducers } from "redux";
import { cartData, cartData2 } from "./reducer";

const rootReducer = combineReducers({ cartData, cartData2 });

export default rootReducer;