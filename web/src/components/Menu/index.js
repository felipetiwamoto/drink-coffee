import React from 'react';
import { NavLink, useHistory } from "react-router-dom";
import { isLogged } from "./../../helpers";

let Menu = (props) => {

    let history = useHistory();

    React.useEffect(() => {
        !isLogged() && history.push("/sair");
        // eslint-disable-next-line
    }, [])

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
                <NavLink activeClassName="menu__link--active" to="/sair" className="menu__link">Sair</NavLink>
            </li>
        </ul>
    );

}

export default Menu;