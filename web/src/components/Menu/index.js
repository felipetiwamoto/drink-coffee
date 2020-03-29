import React from 'react';
import { Link } from "react-router-dom";

let Menu = (props) => {

    return (
        <div id="menu">
            <div className="container">
                <ul className="menu">
                    <li className="menu__item">
                        <Link to="/produtos" className="menu__link">Produtos</Link>
                    </li>
                    <li className="menu__item">
                        <Link to="/pedidos" className="menu__link">Pedidos</Link>
                    </li>
                    <li className="menu__item">
                        <Link to="/carrinho" className="menu__link">Carrinho</Link>
                    </li>
                </ul>
            </div>
        </div>
    );

}

export default Menu;