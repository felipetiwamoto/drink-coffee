import React from 'react';
import { useSelector, useDispatch } from "react-redux";

import { set_orders } from "./../../redux/actions/orders";

import Callback from "./../../components/Callback";
import Header from "./../../components/Header";
import Menu from "./../../components/Menu";
import OrderCard from "./../../components/OrderCard";
import Axios from 'axios';

let Order = (props) => {

    let dispatch = useDispatch();

    let orders = useSelector((state) => (state.orders));
    let callbacks = useSelector((state) => (state.callbacks));

    let setOrders = async () => {
        let results = await Axios.get("http://localhost:3333/order");
        dispatch(set_orders(results.data));
    }

    React.useEffect(() => {
        setOrders();
    }, [])

    let getOrders = () => {
        return orders.map((order, index) => (
            <div key={index} className="col-md-3-12 col-sm-4-12 col-xs-6-12">
                <OrderCard order={order} />
            </div>
        ))
    }

    return (
        <div id="order-list">
            <div className="callback">
                {callbacks.length > 0 && callbacks.map((callback) => (<Callback key={callback._id} {...callback} />))}
            </div>
            <Header />
            <Menu />
            <div className="container">
                <div className="order-group">
                    <h3 className="title">Pedidos</h3>
                    <div className="wg grid">
                        {orders.length > 0 && getOrders()}
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Order;