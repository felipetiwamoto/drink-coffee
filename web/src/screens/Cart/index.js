import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";

import Callback from "./../../components/Callback";
import Header from "./../../components/Header";
import Menu from "./../../components/Menu";
import ProductCard from "./../../components/ProductCard";
import { set_callback } from '../../redux/actions/callbacks';
import { add_order } from '../../redux/actions/orders';
import { clear_cart } from '../../redux/actions/carts';
import Axios from 'axios';

let Cart = (props) => {

    let dispatch = useDispatch();

    let carts = useSelector((state) => (state.carts));
    let callbacks = useSelector((state) => (state.callbacks));
    let logged = useSelector((state) => (state.logged));

    const [totalPrice, setTotalPrice] = useState(0);

    React.useEffect(() => {
        if (carts.length < 1) { setTotalPrice(0); return; }
        let total = carts.reduce((total, current) =>
            ({ price: parseFloat(total.price) + parseFloat(current.price) })
        );
        setTotalPrice(total.price);
    }, [carts]);

    let addOrder = async () => {
        if (carts.length < 1) {
            dispatch(set_callback({
                _id: Math.random(),
                status: "error",
                message: "Não é possivel fazer um pedido vazio."
            }));
            return;
        }

        let data = {
            products: [...carts],
            member: { ...logged }
        };

        await Axios.post("http://localhost:3333/order", data);
        
        dispatch(add_order(data));
        dispatch(clear_cart());
        dispatch(set_callback({
            _id: Math.random(),
            status: "success",
            message: "Pedido realizado com sucesso."
        }));
    }

    return (
        <div id="product-list">
            <div className="callback">
                {callbacks.length > 0 && callbacks.map((callback) => (<Callback key={callback._id} {...callback} />))}
            </div>
            <Header />
            <Menu />
            <div className="container">
                <div className="wg grid">
                    <div className="col">
                        <h3>Total: R$ {totalPrice.toFixed(2)}</h3>
                    </div>
                    <div className="col-md-4-12 col-xs-6-12 jce">
                        <button className="button primary" onClick={() => addOrder()}>Confirmar pedido</button>
                    </div>
                </div>
                <div className="wg grid">
                    {carts.length > 0 &&
                        carts.map((product, index) => (
                            <div key={index} className="col-md-3-12 col-sm-4-12 col-xs-6-12">
                                <ProductCard {...product} inCart />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );

}

export default Cart;