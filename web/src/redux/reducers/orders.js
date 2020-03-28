import { ADD_ORDER, SET_ORDERS, EDIT_ORDER } from "../actions/types";

let initialState = [];

let orders = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ORDER: return add_order(state, action.payload);
        case SET_ORDERS: return set_orders(state, action.payload);
        case EDIT_ORDER: return edit_order(state, action.payload);
        default: return state;
    }
}

let set_orders = (state, payload) => {
    return [...payload];
}

let add_order = (state, payload) => {
    return [...state, payload];
}

let edit_order = (state, payload) => {
    return [...state].map((order) =>
        (order._id === payload._id ?
            { ...order, status: payload.status } :
            { ...order }
        ));
}

export default orders;