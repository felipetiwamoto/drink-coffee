import { ADD_MEMBER } from "../actions/types";

let initialState = [];

let members = (state = initialState, action) => {
    switch(action.type){
        case ADD_MEMBER: return add_member(state, action.payload);
        default: return state;
    }
}

let add_member = (state, payload) => {
    return [ ...state, payload ];
}

export default members;