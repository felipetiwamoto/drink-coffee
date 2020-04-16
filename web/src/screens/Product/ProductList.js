import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FiPlus } from "react-icons/fi";

import { set_products } from "./../../redux/actions/products";

import Callback from "./../../components/Callback";
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
            <div key={product._id} className="col-md-4-12 col-xs-6-12">
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
            <div className="container">
                <div className="wg grid">
                    <div className="col-md-3-12">
                        <Menu />
                    </div>
                    <div className="col-md-9-12 content">
                        <div className="header">
                            <div className="wg grid">
                                <div className="col">
                                    <div className="title">
                                        <h3>Filtre por categoria</h3>
                                        <Link to="/produtos/novo" className="button-add">
                                            <FiPlus />
                                        </Link>
                                    </div>
                                    <ul className="product-type">
                                        {getProductTypeMenu("Sobremesa")}
                                        {getProductTypeMenu("Lanche")}
                                        {getProductTypeMenu("Salgado")}
                                        {getProductTypeMenu("Bebida")}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="body">
                            <div className="wg grid">
                                {products.length > 0 && getProductByCategory(productType)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default ProductList;