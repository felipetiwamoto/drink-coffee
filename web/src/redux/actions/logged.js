import { SET_LOGGED } from "./types";

export let set_logged = (data) => {
    return {
        type: SET_LOGGED,
        payload: data
    }
}