import React from 'react';
import { FiEdit3 } from 'react-icons/fi';

import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { edit_order } from "./../../redux/actions/orders";
import { set_cart } from "./../../redux/actions/carts";
import { api } from "./../../helpers";

let OrderCard = (props) => {

    let history = useHistory();
    let dispatch = useDispatch();

    let changeStatus = async (status) => {
        await api.put(`/order/${props.order._id}`, { ...props.order, status });
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
                <div className="title">
                    <h5 className="order__title" title={props.order.member.name}>{props.order.member.name}</h5>
                    <button type="button" className="button-edit" onClick={() => editOrder()}>
                        <FiEdit3 />
                    </button>
                </div>
            </div>
            {
                props.order.status !== "pago" &&
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
        </div >
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