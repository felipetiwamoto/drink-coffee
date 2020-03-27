import { ADD_ORDER, SET_ORDERS } from "../actions/types";

let initialState = [];

let orders = (state = initialState, action) => {
    switch(action.type){
        case ADD_ORDER: return add_order(state, action.payload);
        case SET_ORDERS: return set_orders(state, action.payload);
        default: return state;
    }
}

let set_orders = (state, payload) => {
    return [ ...payload ];
}

let add_order = (state, payload) => {
    return [ ...state, payload ];
}

export default orders;