import { ADD_PRODUCT_TO_CART, SET_CART, REMOVE_PRODUCT_FROM_CART, CLEAR_CART } from "../actions/types";

let initialState = {
    products: []
};

let member = (state = initialState, action) => {
    switch(action.type){
        case ADD_PRODUCT_TO_CART: return add_product_to_cart(state, action.payload);
        case REMOVE_PRODUCT_FROM_CART: return remove_product_from_cart(state, action.payload);
        case CLEAR_CART: return clear_cart(state, action.payload);
        case SET_CART: return set_cart(state, action.payload);
        default: return state;
    }
}

let add_product_to_cart = (state, payload) => {
    return { ...state, products: [ ...state.products, payload ] };
}

let set_cart = (state, payload) => {
    return { ...payload };
}

let remove_product_from_cart = (state, payload) => {
    let hasRemovedAlready = false;
    let newState =  { ...state }.products.filter((product) => {
        if((product._id !== payload._id) || hasRemovedAlready){
            return product;
        }
        if((product._id === payload._id)){
            hasRemovedAlready = true;
        }
    });
    return { ...state, products: newState };
}

let clear_cart = (state, payload) => {
    return { products: [] };
}

export default member;