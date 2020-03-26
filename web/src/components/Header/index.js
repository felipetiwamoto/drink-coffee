import React from 'react';

let Header = (props) => {

    return (
        <div id="header">
            <div className="container">
                <div className="wg grid">
                    <div className="col-sm-3-12">
                        <div className="logo"></div>
                    </div>
                    <div className="col">
                        <div className="cart"></div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Header;