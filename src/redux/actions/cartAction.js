import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "../constants";

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
export const removeFromCart = (data) => {
    console.warn("removeFromCart called with data : ", data);
    return {
        type: REMOVE_FROM_CART,
        info: {
            "extra": "Cart info",
            ...data,
        }
    }
}
export const emptyCart = () => {
    return {
        type: EMPTY_CART,
    }
}

export const dummyAction = (data) => {
    console.warn("*** Dummy action called :", data);

    return{
        type: "DUMMY",
        data: "xyz"
    }
}
