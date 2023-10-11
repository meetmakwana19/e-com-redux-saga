import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "../constants";

export const addToCart = (data) => {
  console.warn("action called with data : ", data);
  alert("Action ADD_TO_CART dispatched")
  return {
    type: ADD_TO_CART,
    info: {
      extra: "Cart info",
      ...data,
    },
  };
};
export const removeFromCart = (data) => {
  console.warn("removeFromCart called with data : ", data);
  return {
    type: REMOVE_FROM_CART,
    data,
  };
};
export const emptyCart = () => {
  alert("Action EMPTY_CART dispatched")
  return {
    type: EMPTY_CART,
  };
};

export const dummyAction = (data) => {
  console.warn("*** Dummy action called :", data);
  alert("Action DUMMY dispatched")

  return {
    type: "DUMMY",
    data: "xyz",
  };
};
