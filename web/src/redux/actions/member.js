import { ADD_MEMBER } from "./types";

export let add_member = (data) => {
    return {
        type: ADD_MEMBER,
        payload: data
    }
}