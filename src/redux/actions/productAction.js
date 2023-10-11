import { PRODUCT_LIST, SET_PRODUCT_LIST, SORT_PRODUCTS } from "../constants";

export const productList = () => {
  // let data = "hello";
  console.warn("I am productList action");
  return {
    type: PRODUCT_LIST,
    // data,
  };
};

export const sortProducts = (data) => {
  console.warn("Sorting !! ", data);
  // let data = "hello"
  return {
    type: SORT_PRODUCTS,
    data,
  }
}
