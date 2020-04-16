import React from 'react';
import { useSelector, useDispatch } from "react-redux";

import { set_orders } from "./../../redux/actions/orders";

import Callback from "./../../components/Callback";
import Menu from "./../../components/Menu";
import OrderCard from "./../../components/OrderCard";
import { api } from "./../../helpers";

let Order = (props) => {

    let dispatch = useDispatch();

    let orders = useSelector((state) => (state.orders));
    let callbacks = useSelector((state) => (state.callbacks));

    let setOrders = async () => {
        let results = await api.get("/order");
        dispatch(set_orders(results.data));
    }

    React.useEffect(() => {
        setOrders();
        // eslint-disable-next-line
    }, [])

    let getOrders = () => {
        let filtered = orders.filter((order, index) => (order.status !== "pago"));

        return filtered.map((order, index) => (
            <div key={index} className="col-md-4-12 col-xs-6-12">
                <OrderCard order={order} />
            </div>
        ))
    }

    return (
        <div id="cart-list">
            <div className="callback">
                {callbacks.length > 0 && callbacks.map((callback) => (<Callback key={callback._id} {...callback} />))}
            </div>
            <div className="container">
                <div className="wg grid">
                    <div className="col-md-3-12">
                        <Menu />
                    </div>
                    <div className="col-md-9-12 content">
                        <div className="header">
                            <div className="title">
                                <h3>Pedidos</h3>
                            </div>
                        </div>
                        <div className="body">
                            <div className="wg grid">
                                {orders.length > 0 && getOrders()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Order;