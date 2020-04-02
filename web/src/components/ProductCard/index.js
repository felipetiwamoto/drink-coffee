import React from 'react';
import { FiEdit3 } from 'react-icons/fi';
import { Link } from "react-router-dom";
// import { MdStar } from 'react-icons/md';

import { add_product_to_cart, remove_product_from_cart } from "./../../redux/actions/carts";
import { set_callback } from "./../../redux/actions/callbacks";

import { useDispatch } from 'react-redux';

let ProductCard = (props) => {

    let dispatch = useDispatch();

    let addProductToCart = () => {
        dispatch(add_product_to_cart(props.product));
        dispatch(set_callback({
            _id: Math.random(),
            status: "success",
            message: `Produto adicionado ao carrinho com sucesso.`
        }))
    }

    let removeProductFromCart = () => {
        dispatch(remove_product_from_cart(props.product));
        dispatch(set_callback({
            _id: Math.random(),
            status: "success",
            message: `Produto removido do carrinho com sucesso.`
        }))
    }

    return (
        <div className="product">
            <div className="product__body">
                <div className="product__top">
                    <div className="title">
                        <h5 className="product__title" title={props.product.name}>{props.product.name}</h5>
                        {props.editable &&
                            <Link to={`/produtos/editar/${props.product._id}`} className="button-edit">
                                <FiEdit3 />
                            </Link>
                        }
                    </div>
                    <p className="product__description">{props.product.description}</p>
                </div>
                <div className="product__actions">
                    {!props.inCart ?
                        <button className="button fluid button--secondary" onClick={() => addProductToCart()}>
                            {/* <FiPlus size="26px" />  */}
                             R$ {parseFloat(props.product.price).toFixed(2)}
                        </button> :
                        <button className="button fluid button--error" onClick={() => removeProductFromCart()}>
                            Remover
                        </button>
                    }
                </div>
            </div>
        </div>
    );

}

ProductCard.defaultProps = {
    inCart: false,
    editable: false,
    product: {
        _id: null,
        name: "",
        description: "",
        price: 0,
    }
}

export default ProductCard;