import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { set_products } from "./../../redux/actions/products";

import Callback from "./../../components/Callback";
import Header from "./../../components/Header";
import Menu from "./../../components/Menu";
import ProductCard from "./../../components/ProductCard";
import { api } from "./../../helpers";

let ProductList = (props) => {

    let dispatch = useDispatch();

    let products = useSelector((state) => (state.products));
    let callbacks = useSelector((state) => (state.callbacks));

    let [productType, setProductType] = useState("Sobremesa");

    let getProducts = async () => {
        let results = await api.get("/product");
        dispatch(set_products(results.data));
    }

    React.useEffect(() => {
        getProducts();
        // eslint-disable-next-line
    }, [])

    let getProductByCategory = (category) => {
        let results = products.filter((product) => (product.category === category));

        return results.map((product) => (
            <div key={product._id} className="col-md-3-12 col-sm-4-12 col-xs-6-12">
                <ProductCard editable product={product} />
            </div>
        ))
    }

    let getProductTypeMenu = (type) => {
        return (
            <li
                onClick={() => setProductType(type)}
                className={`
                    product-type__item 
                    ${productType === type ? "product-type__item--active" : ""}
                `}
            >{type}</li>
        );
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
                    <div className="wg grid" id="title">
                        <div className="col">
                            <h3 className="title">Filtre por categoria:</h3>
                            <ul className="product-type">
                                {getProductTypeMenu("Sobremesa")}
                                {getProductTypeMenu("Lanche")}
                                {getProductTypeMenu("Salgado")}
                                {getProductTypeMenu("Bebida")}
                            </ul>
                        </div>
                        <div className="col-sm-3-12">
                            <Link to="/produtos/novo" className="button">Novo Produto</Link>
                        </div>
                    </div>
                    <div className="wg grid">
                        {products.length > 0 && getProductByCategory(productType)}
                    </div>
                </div>
            </div>
        </div>
    );

}

export default ProductList;