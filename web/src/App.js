import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./redux/store";

import "./assets/css/main.css";

// Routes
import Login from "./screens/Login";
import ProductList from "./screens/Product/ProductList";
import ProductAdd from "./screens/Product/ProductAdd";
import ProductEdit from "./screens/Product/ProductEdit";
import Cart from "./screens/Cart";
import Order from "./screens/Order";
import Logout from "./screens/Logout";

let App = (props) => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Login} />
                    <Route path="/produtos" exact component={ProductList} />
                    <Route path="/produtos/novo" component={ProductAdd} />
                    <Route path="/produtos/editar/:id" component={ProductEdit} />
                    <Route path="/carrinho" component={Cart} />
                    <Route path="/pedidos" component={Order} />
                    <Route path="/sair" component={Logout} />
                </Switch>
            </BrowserRouter>
        </Provider>
    );
}

export default App;