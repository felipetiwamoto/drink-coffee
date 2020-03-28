import React from 'react';

import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { edit_order } from "./../../redux/actions/orders";
import { set_cart } from "./../../redux/actions/carts";
import Axios from 'axios';

let OrderCard = (props) => {

    let history = useHistory();
    let dispatch = useDispatch();

    let changeStatus = async (status) => {
        await Axios.put(`http://localhost:3333/order/${props.order._id}`, { ...props.order, status });
        dispatch(edit_order({ ...props.order, status }));
    }

    let statusButton = (title) => {
        return (
            <button
                type="button"
                onClick={() => changeStatus(title)}
                className={
                    `order__status__item 
                            ${props.order.status === title ? "order__status__item--active" : ""}`
                }
            >{title}</button>
        );
    }

    let editOrder = () => {
        dispatch(set_cart({ ...props.order }));
        history.push("/carrinho");
    }

    return (
        <div className="order">
            <div className="order__top">
                <h5 className="order__name" title={props.order.member.name}>{props.order.member.name}</h5>
                {props.order.status !== "pago" &&
                    <button type="button" onClick={() => editOrder()} className="button order__edit">editar</button>
                }
            </div>
            {props.order.status !== "pago" &&
                <div className="order__status">
                    {statusButton("preparando")}
                    {statusButton("comendo")}
                    {statusButton("pago")}
                </div>
            }
            <div className="order__product">
                {props.order.products.length > 0 &&
                    props.order.products.map((product, index) => (
                        <div key={index} className="order__product__item">
                            <span className="order__product__name" title={product.name}>{product.name}</span>
                            <span className="order__product__price">R$ {product.price}</span>
                        </div>
                    ))
                }
            </div>
            <div className="order__calc">
                <span className="order__calc__title">Total:</span>
                <span className="order__calc__total">R$ {props.order.total}</span>
            </div>
        </div>
    );

}

OrderCard.defaultProps = {
    order: {
        _id: null,
        total: 0,
        member: {},
        products: []
    }
}

export default OrderCard;