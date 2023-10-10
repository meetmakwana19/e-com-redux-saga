export const addToCart = (data) => {
    console.warn("action called with data : ", data);
    return {
        type: "ADD_TO_CART",
        info: {
            "extra": "Cart info",
            ...data,
        }
    }
}
