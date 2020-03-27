import { SET_CALLBACK, REMOVE_CALLBACK } from "../actions/types";

let initialState = [];

let callback = (state = initialState, action) => {
    switch(action.type){
        case SET_CALLBACK: return set_callback(state, action.payload);
        case REMOVE_CALLBACK: return remove_callback(state, action.payload);
        default: return state;
    }
}

let set_callback = (state, payload) => {
    return [ ...state, payload ];
}

let remove_callback = (state, payload) => {
    return [ ...state ].filter((callback) => (callback._id !== payload._id));
}

export default callback;