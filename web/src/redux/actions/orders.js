import { ADD_ORDER, SET_ORDERS } from "./types";

export let set_orders = (data) => {
    return {
        type: SET_ORDERS,
        payload: data
    }
}

export let add_order = (data) => {
    return {
        type: ADD_ORDER,
        payload: data
    }
}