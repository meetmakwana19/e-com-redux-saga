import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from "../constants";

// A reducer for all the CRUD operations for cart
export const cartData = (initialData = [], action) => {
  // Reducer must have some initial value

  // We need some condition as on one dispatched action, other reducers can also be called like the following cartData2
  // so adding switch case

  switch (action.type) {
    case ADD_TO_CART:
      console.warn("Action recieved in reducer : ", action);

      // to culminate the previous data too, returning an array by destructuring the previous data.
      return [action.info, ...initialData];

    case REMOVE_FROM_CART:
      console.warn("Action recieved in reducer : ", action);
      // initialData.length = initialData.length - 1;
      initialData.pop();
      return [...initialData];

    case EMPTY_CART:
      console.warn("Action recieved in reducer : ", action);
      initialData = []
      return [...initialData];

    default:
      console.warn(action.type, " !!! Action not matched");
      // sending initialData if no match found
      return initialData;
  }
};

// non matching action types will be passed through this reducer but with different data.
export const cartData2 = (initialData = [], action) => {
  // Reducer must have some initial value
  console.warn("***** Action recieved in reducer 2 : ", {
    hello: "hello",
    ...action,
  });
  return "abc";
};
