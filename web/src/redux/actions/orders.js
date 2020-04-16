import { ADD_ORDER, SET_ORDERS, EDIT_ORDER } from "./types";

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

export let edit_order = (data) => {
    return {
        type: EDIT_ORDER,
        payload: data
    }
}