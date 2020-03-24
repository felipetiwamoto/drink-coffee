import { createStore, combineReducers } from "redux";
import member from "./reducers/member";

let reducers = combineReducers({
    member
});

let store = createStore(reducers);

export default store;