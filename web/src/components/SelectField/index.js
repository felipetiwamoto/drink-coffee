import React, { useState, useEffect } from 'react';

let SelectField = (props) => {

    let [fieldValue, setFieldValue] = useState("");
    let [callback, setCallback] = useState({
        message: "",
        status: false
    });

    useEffect(() => {
        setFieldValue(props.value);
    }, [props.value]);

    useEffect(() => {
        validation();
        // eslint-disable-next-line
    }, [fieldValue]);

    useEffect(() => {
        props.onChange(props.id, {
            status: callback.status,
            value: fieldValue
        });
        // eslint-disable-next-line
    }, [callback]);

    let handleChange = (e) => {
        setFieldValue(e.target.value);
    }

    let validation = () => {
        if (!props.mandatory) {
            return setCallback({ status: true, message: "" });
        }

        if (!requiredValidation()) { return; }

        setCallback({ status: true, message: "" });
    }

    let requiredValidation = () => {
        if ((fieldValue.trim().length < 1)) {
            setCallback({ status: false, message: "Este campo é obrigatório." });
            return false;
        }
        return true;
    }

    return (
        <div className={`field-group ${props.className} ${!callback.status ? `error` : ``}`}>
            <select
                name={props.id}
                id={props.id}
                className="field"
                onChange={handleChange}
                value={fieldValue}
            >
                {props.options && props.options.map((option, index) => (
                    <option
                        key={index}
                        value={option.value}
                    >{option.label}</option>
                ))}
            </select>
            <label htmlFor={props.id}>
                {props.label}
                <div className="callback">{!callback.status && callback.message}</div>
            </label>
        </div>
    );
}

SelectField.defaultProps = {
    id: null,
    name: null,
    value: "",
    label: null,
    className: "",
    mandatory: true
}

export default SelectField;