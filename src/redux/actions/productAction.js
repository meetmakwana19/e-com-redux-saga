import { PRODUCT_LIST } from "../constants";

export const productList = () => {
  let data = "hello";

  console.warn("Get Product ", data);

  return {
    type: PRODUCT_LIST,
    data: [data],
  };
};
