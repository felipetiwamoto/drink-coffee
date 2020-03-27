import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { remove_callback } from "./../../redux/actions/callbacks";

let Callback = (props) => {

    let dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => dispatch(remove_callback(props)), props.timeout);
    }, []);

    return (
        <div className="callback__item" onClick={() => dispatch(remove_callback(props))}>
            <div className="callback__message">{props.message}</div>
        </div>
    );

}

Callback.defaultProps = {
    _id: null,
    message: "",
    status: "",
    timeout: 5000
}

export default Callback;