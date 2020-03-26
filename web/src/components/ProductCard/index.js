import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { MdStar } from 'react-icons/md';

let ProductCard = (props) => {

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
                <div className="product__add">
                    <FiPlus size="26px" />
                </div>
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

export default ProductCard;