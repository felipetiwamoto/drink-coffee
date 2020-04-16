import React from 'react';
import { Redirect } from "react-router-dom";

import { set } from "../../helpers";

let Cart = (props) => {

    React.useEffect(() => {
        set("logged", []);
    }, []);

    return (
        <Redirect to="/" />
    );

}

export default Cart;