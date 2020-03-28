import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";

import Callback from "./../../components/Callback";
import Header from "./../../components/Header";
import Menu from "./../../components/Menu";
import ProductCard from "./../../components/ProductCard";
import { set_callback } from '../../redux/actions/callbacks';
import { add_order, edit_order } from '../../redux/actions/orders';
import { clear_cart } from '../../redux/actions/carts';
import Axios from 'axios';
import TextField from "./../../components/TextField";
import { get } from "./../../helpers";

let Cart = (props) => {

    let dispatch = useDispatch();

    let carts = useSelector((state) => (state.carts));
    let callbacks = useSelector((state) => (state.callbacks));
    let logged = useSelector((state) => (state.logged));

    let [form, setForm] = useState({
        name: {
            value: "",
            status: false
        }
    });

    const [totalPrice, setTotalPrice] = useState(0.00);

    React.useEffect(() => {
        if (carts.products.length < 1) { setTotalPrice(0.00); return; }
        let total = carts.products.reduce((total, current) =>
            ({ price: (parseFloat(total.price) + parseFloat(current.price)).toFixed(2) })
        );
        setTotalPrice(total.price);
    }, [carts]);

    let handleFieldChange = (key, field) => {
        setForm({ ...form, [key]: field });
    }

    let formValidate = () => {
        let checker = true;

        Object.keys(form).forEach((key) => {
            if (!form[key].status) {
                checker = false;
            }
        })

        return checker;
    }

    let editOrder = async () => {
        if (carts.products.length < 1) {
            dispatch(set_callback({
                _id: Math.random(),
                status: "error",
                message: "Não é possivel fazer um pedido vazio."
            }));
            return;
        }

        if (!formValidate()) { return; }

        let data = {
            status: carts.status,
            products: [...carts.products],
            member: {
                name: form.name.value
            },
            total: totalPrice
        };

        await Axios.put(`http://localhost:3333/order/${carts._id}`, data);

        dispatch(edit_order(data));
        dispatch(clear_cart());
        dispatch(set_callback({
            _id: Math.random(),
            status: "success",
            message: "Pedido alterado com sucesso."
        }));
    }

    let addOrder = async () => {
        if (carts.products.length < 1) {
            dispatch(set_callback({
                _id: Math.random(),
                status: "error",
                message: "Não é possivel fazer um pedido vazio."
            }));
            return;
        }

        if (!formValidate()) { return; }

        let data = {
            status: "preparando",
            products: [...carts.products],
            member: {
                name: form.name.value
            },
            total: totalPrice
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
                        <h3>Total: R$ {totalPrice}</h3>
                    </div>
                    <div className="col-md-4-12 col-xs-6-12 jce aic">
                        <TextField
                            value={carts._id ? carts.member.name : ""}
                            id="name"
                            placeholder="Nome/Mesa"
                            label="Nome/Mesa do cliente"
                            onBlur={handleFieldChange}
                        />
                        {!carts._id ?
                            <button className="button fluid" onClick={addOrder}>
                                Adicionar pedido
                            </button> :
                            <button className="button fluid" onClick={editOrder}>
                                Editar pedido
                            </button>
                        }
                    </div>
                </div>
                <div className="wg grid">
                    {carts.products.length > 0 &&
                        carts.products.map((product, index) => (
                            <div key={index} className="col-md-3-12 col-sm-4-12 col-xs-6-12">
                                <ProductCard product={product} inCart />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );

}

export default Cart;