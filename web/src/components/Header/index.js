import React from 'react';
import { Link } from "react-router-dom";

let Header = (props) => {

    return (
        <div id="header">
            <div className="container">
                <div className="wg grid jcsb">
                    <div className="col-sm-3-12">
                        <div className="logo"></div>
                    </div>
                    <div className="col jce">
                        <Link to="/carrinho" className="cart-link">Ir para carrinho</Link>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Header;