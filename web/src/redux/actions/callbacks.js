import { SET_CALLBACK, REMOVE_CALLBACK } from "./types";

export let set_callback = (data) => {
    return {
        type: SET_CALLBACK,
        payload: data
    }
}

export let remove_callback = (data) => {
    return {
        type: REMOVE_CALLBACK,
        payload: data
    }
}