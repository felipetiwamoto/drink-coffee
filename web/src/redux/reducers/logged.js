import { SET_LOGGED } from "../actions/types";

let initialState = {};

let logged = (state = initialState, action) => {
    switch(action.type){
        case SET_LOGGED: return set_logged(state, action.payload);
        default: return state;
    }
}

let set_logged = (state, payload) => {
    return { ...payload };
}

export default logged;