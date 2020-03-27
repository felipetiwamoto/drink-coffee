import React from 'react';

let OrderCard = (props) => {

    return (
        <div className="order">
            <div className="order__body">
                <div className="order__top">
                    <h5 className="order__name">{props.member.name}</h5>
                    <div className="order__product">
                        
                    </div>
                </div>
                <div className="order__bottom">
                    <h3 className="order__price">R$ {props.price}</h3>
                </div>
            </div>
        </div>
    );

}

OrderCard.defaultProps = {
    _id: null,
    name: "",
    description: "",
    price: 0,
    inCart: false
}

export default OrderCard;