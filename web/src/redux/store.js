import { createStore, combineReducers } from "redux";
import logged from "./reducers/logged";
import members from "./reducers/members";
import products from "./reducers/products";
import carts from "./reducers/carts";
import callbacks from "./reducers/callbacks";
import orders from "./reducers/orders";

let reducers = combineReducers({
    logged,
    members,
    products,
    carts,
    callbacks,
    orders,
});

let store = createStore(reducers);

export default store;