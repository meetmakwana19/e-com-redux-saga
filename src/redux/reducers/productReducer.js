import { PRODUCT_LIST, SET_PRODUCT_LIST } from "../constants";

export const productData = (initialData = [], action) => {
  // Reducer must have some initial value

  switch (action.type) {

    // *******NO NEED OF THIS CASE AS PRODUCT_LIST IS GETTING TRIGGERED IN productSaga.js WHICH IN TURN IS HITTING SET_PRODUCT_LIST
    // case PRODUCT_LIST:
    //   console.warn("Product Action recieved in reducer : ", action);

    //   // to culminate the previous data too, returning an array by destructuring the previous data.
    //   return [action.data, ...initialData];

    case SET_PRODUCT_LIST:
      console.warn("SET_PRODUCT_LIST got in reducer : ", action);
      return [...action.data];

    default:
      console.warn(action.type, " !!! Action not matched");
      // sending initialData if no match found
      return initialData;
  }
};
