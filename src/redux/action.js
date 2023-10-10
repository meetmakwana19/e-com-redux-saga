import { ADD_TO_CART } from "./constants";

export const addToCart = (data) => {
    console.warn("action called with data : ", data);
    return {
        type: ADD_TO_CART,
        info: {
            "extra": "Cart info",
            ...data,
        }
    }
}

export const dummyAction = (data) => {
    console.warn("*** Dummy action called :", data);

    return{
        type: "DUMMY",
        data: "xyz"
    }
}
