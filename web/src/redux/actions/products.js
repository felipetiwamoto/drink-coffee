import { SET_PRODUCTS } from "./types";

export let set_products = (data) => {
    return {
        type: SET_PRODUCTS,
        payload: data
    }
}