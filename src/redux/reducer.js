import { ADD_TO_CART } from "./constants";

// A reducer for all the CRUD operations for cart
export const cartData = (initialData = [], action) => {
  // Reducer must have some initial value

  // We need some condition as on one dispatched action, other reducers can also be called like the following cartData2 
  // so adding if conditions

  if(action.type === ADD_TO_CART){
      console.warn("Action recieved in reducer : ", action);
      return action.info;
  }
  else{
    console.warn(action.type, " !!! Action not matched");
    return "No action matched."
  }
};

// non matching action types will be passed through this reducer but with different data.
export const cartData2 = (initialData = [], action) => {
  // Reducer must have some initial value
  console.warn("***** Action recieved in reducer 2 : ", { hello: "hello", ...action });
  return "abc";
};
