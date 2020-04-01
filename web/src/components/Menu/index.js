import React from 'react';
import { Link } from "react-router-dom";

let Menu = (props) => {

    return (
        <ul className="menu">
            <li className="menu__item">
                <Link to="/produtos" className="menu__link">Produtos</Link>
            </li>
            <li className="menu__item menu__item--active">
                <Link to="/pedidos" className="menu__link">Pedidos</Link>
            </li>
            <li className="menu__item">
                <Link to="/carrinho" className="menu__link">Carrinho</Link>
            </li>
            <li className="menu__item">
                <Link to="/membros" className="menu__link">Membros</Link>
            </li>
            <li className="menu__item">
                <Link to="/sair" className="menu__link">Sair</Link>
            </li>
        </ul>
    );

}

export default Menu;