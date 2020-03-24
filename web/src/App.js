import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./redux/store";

// Routes
import Login from "./screens/Login";
import MemberList from "./screens/Member/MemberList";
import MemberAdd from "./screens/Member/MemberAdd";
import MemberEdit from "./screens/Member/MemberEdit";
import ProductList from "./screens/Product/ProductList";
import ProductAdd from "./screens/Product/ProductAdd";
import ProductEdit from "./screens/Product/ProductEdit";
import Cart from "./screens/Cart";
import Order from "./screens/Order";

let App = (props) => {

    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Login} />
                    <Route path="/membros" exact component={MemberList} />
                    <Route path="/membros/novo" component={MemberAdd} />
                    <Route path="/membros/editar/:id" component={MemberEdit} />
                    <Route path="/produtos" exact component={ProductList} />
                    <Route path="/produtos/novo" component={ProductAdd} />
                    <Route path="/produtos/editar/:id" component={ProductEdit} />
                    <Route path="/carrinho" component={Cart} />
                    <Route path="/pedidos" component={Order} />
                </Switch>
            </BrowserRouter>
        </Provider>
    );

}

export default App;