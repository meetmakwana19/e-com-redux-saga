import { PRODUCT_LIST, SET_PRODUCT_LIST } from "../constants";

export const productList = () => {
  // let data = "hello";
  console.warn("I am productList action");
  return {
    type: PRODUCT_LIST,
    // data,
  };
};
