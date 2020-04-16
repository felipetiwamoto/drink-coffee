import { SET_PRODUCTS } from "../actions/types";

let initialState = [];

let products = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS: return set_products(action.payload);
        default: return state;
    }
}

let set_products = (payload) => {
    return [...payload];
}

export default products;