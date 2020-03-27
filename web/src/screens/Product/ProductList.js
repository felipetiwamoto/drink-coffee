import React from 'react';
import { useSelector, useDispatch } from "react-redux";

import { set_products } from "./../../redux/actions/products";

import Callback from "./../../components/Callback";
import Header from "./../../components/Header";
import Menu from "./../../components/Menu";
import ProductCard from "./../../components/ProductCard";
import Axios from 'axios';

let ProductList = (props) => {

    let dispatch = useDispatch();

    let products = useSelector((state) => (state.products));
    let callbacks = useSelector((state) => (state.callbacks));

    let getProducts = async () => {
        let results = await Axios.get("http://localhost:3333/product");
        dispatch(set_products(results.data));
    }

    React.useEffect(() => {
        getProducts();
    }, [])

    let getProductByCategory = (category) => {
        let results = products.filter((product) => (product.category === category));

        return results.map((product) => (
            <div key={product._id} className="col-md-3-12 col-sm-4-12 col-xs-6-12">
                <ProductCard {...product} />
            </div>
        ))
    }

    return (
        <div id="product-list">
            <div className="callback">
                {callbacks.length > 0 && callbacks.map((callback) => (<Callback key={callback._id} {...callback} />))}
            </div>
            <Header />
            <Menu />
            <div className="container">
                <div className="product-group">
                    <h3 className="title">Sobremesas</h3>
                    <div className="wg grid">
                        {products.length > 0 && getProductByCategory("Sobremesa")}
                    </div>
                </div>
                <div className="product-group">
                    <h3 className="title">Bebidas</h3>
                    <div className="wg grid">
                        {products.length > 0 && getProductByCategory("Bebida")}
                    </div>
                </div>
                <div className="product-group">
                    <h3 className="title">Lanches</h3>
                    <div className="wg grid">
                        {products.length > 0 && getProductByCategory("Lanche")}
                    </div>
                </div>
                <div className="product-group">
                    <h3 className="title">Salgados</h3>
                    <div className="wg grid">
                        {products.length > 0 && getProductByCategory("Salgado")}
                    </div>
                </div>
            </div>
        </div>
    );

}

export default ProductList;