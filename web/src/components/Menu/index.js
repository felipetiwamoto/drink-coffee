import React from 'react';
import { NavLink } from "react-router-dom";

let Menu = (props) => {

    return (
        <ul className="menu">
            <li className="menu__item">
                <NavLink activeClassName="menu__link--active" to="/produtos" className="menu__link">Produtos</NavLink>
            </li>
            <li className="menu__item">
                <NavLink activeClassName="menu__link--active" to="/carrinho" className="menu__link">Carrinho</NavLink>
            </li>
            <li className="menu__item">
                <NavLink activeClassName="menu__link--active" to="/pedidos" className="menu__link">Pedidos</NavLink>
            </li>
            <li className="menu__item">
                <NavLink activeClassName="menu__link--active" to="/membros" className="menu__link">Membros</NavLink>
            </li>
            <li className="menu__item">
                <NavLink activeClassName="menu__link--active" to="/sair" className="menu__link">Sair</NavLink>
            </li>
        </ul>
    );

}

export default Menu;