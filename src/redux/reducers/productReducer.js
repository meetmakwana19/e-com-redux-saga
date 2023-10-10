import { PRODUCT_LIST } from "../constants";

export const productData = (initialData = [], action) => {
  // Reducer must have some initial value

  switch (action.type) {
    case PRODUCT_LIST:
      console.warn("Product Action recieved in reducer : ", action);

      // to culminate the previous data too, returning an array by destructuring the previous data.
      return [action.data, ...initialData];
      // return action.data;


    default:
      console.warn(action.type, " !!! Action not matched");
      // sending initialData if no match found
      return initialData;
  }
};

