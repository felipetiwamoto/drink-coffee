import { createStore, combineReducers } from "redux";
import logged from "./reducers/logged";
import member from "./reducers/member";
import products from "./reducers/products";

let reducers = combineReducers({
    logged,
    member,
    products,
});

let store = createStore(reducers);

export default store;