import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART, CLEAR_CART } from "./types";

export let add_product_to_cart = (data) => {
    return {
        type: ADD_PRODUCT_TO_CART,
        payload: data
    }
}

export let remove_product_from_cart = (data) => {
    return {
        type: REMOVE_PRODUCT_FROM_CART,
        payload: data
    }
}

export let clear_cart = () => {
    return {
        type: CLEAR_CART
    }
}