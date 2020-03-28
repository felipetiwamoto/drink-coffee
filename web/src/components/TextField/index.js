import React, { useState, useEffect } from 'react';

let TextField = (props) => {

    let [fieldValue, setFieldValue] = useState("");
    let [callback, setCallback] = useState({
        message: "",
        status: false
    });

    useEffect(() => {
        setFieldValue(props.value);
        handleBlur();
    }, []);

    useEffect(() => {
        propsHandleBlur();
    }, [callback]);

    let propsHandleBlur = () => {
        props.onBlur(props.id, {
            value: fieldValue,
            status: callback.status
        })
    }

    let handleChange = (e) => {
        setFieldValue(e.target.value);
    }

    let handleBlur = () => {
        checkMandatory();
        checkMinLength();
        checkMaxLength();
    }

    let checkMandatory = () => {
        if (!props.mandatory) {
            setCallback({ message: "", status: true });
            return;
        }
        
        if (fieldValue.length < 1 || fieldValue.trim() === "") {
            setCallback({
                message: "Este campo é obrigatório!",
                status: false
            });
            return;
        }

        setCallback({ message: "", status: true });
    }

    let checkMinLength = () => { return; }

    let checkMaxLength = () => { return; }

    return (
        <div className={`field-group ${props.className} ${!callback.status ? `error` : ``}`}>
            <div className="callback">{!callback.status && callback.message}</div>
            <input
                type={props.type}
                className="field"
                id={props.id}
                name={props.id}
                placeholder={props.placeholder}
                value={fieldValue}
                onChange={(e) => handleChange(e)}
                onBlur={() => handleBlur()}
            />
            <label htmlFor={props.id}>{props.label}</label>
        </div>
    );

}

TextField.defaultProps = {
    id: null,
    name: null,
    type: "text",
    value: "",
    placeholder: null,
    label: null,
    className: "",
    mandatory: true,
    minLength: null,
    maxLength: null,
}

export default TextField;