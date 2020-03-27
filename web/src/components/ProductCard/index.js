import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { FiMinus } from 'react-icons/fi';
import { MdStar } from 'react-icons/md';

import { add_product_to_cart, remove_product_from_cart } from "./../../redux/actions/carts";
import { set_callback } from "./../../redux/actions/callbacks";

import { useDispatch } from 'react-redux';

let ProductCard = (props) => {

    let dispatch = useDispatch();

    let addProductToCart = () => {
        dispatch(add_product_to_cart(props));
        dispatch(set_callback({
            _id: Math.random(),
            status: "success",
            message: `Produto adicionado ao carrinho com sucesso.`
        }))
    }

    let removeProductFromCart = () => {
        dispatch(remove_product_from_cart(props));
        dispatch(set_callback({
            _id: Math.random(),
            status: "success",
            message: `Produto removido do carrinho com sucesso.`
        }))
    }

    return (
        <div className="product">
            <div className="product__photo"></div>
            <div className="product__actions">
                <div className="product__rate">
                    <div className="product__rate__star"><MdStar /></div>
                    <div className="product__rate__star"><MdStar /></div>
                    <div className="product__rate__star"><MdStar /></div>
                    <div className="product__rate__star"><MdStar /></div>
                    <div className="product__rate__star"><MdStar /></div>
                </div>
                {!props.inCart ?
                    <div className="product__icon" onClick={() => addProductToCart()}>
                        <FiPlus size="26px" />
                    </div> :
                    <div className="product__icon" onClick={() => removeProductFromCart()}>
                        <FiMinus size="26px" />
                    </div>
                }
            </div>
            <div className="product__body">
                <div className="product__top">
                    <h5 className="product__title">{props.name}</h5>
                    <p className="product__description">{props.description}</p>
                </div>
                <div className="product__bottom">
                    <h3 className="product__price">R$ {props.price}</h3>
                </div>
            </div>
        </div>
    );

}

ProductCard.defaultProps = {
    _id: null,
    name: "",
    description: "",
    price: 0,
    inCart: false
}

export default ProductCard;