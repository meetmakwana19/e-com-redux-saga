import { combineReducers } from "redux";
import { cartData, cartData2 } from "./cartReducer";
import { productData } from "./productReducer";

const rootReducer = combineReducers({ cartData, cartData2, productData });

export default rootReducer;