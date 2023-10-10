import { PRODUCT_LIST } from "../constants";

export const productList = async () => {
  // let data = "hello";
  let data = await fetch(`https://fakestoreapi.com/products`);
  data = await data.json();
  console.warn("API data : ", data);


  console.warn("Get Product ", data);

  return {
    type: PRODUCT_LIST,
    data: [data],
    // data,
  };
};
