import React, { useState, useEffect } from 'react';

let TextField = (props) => {

    let [fieldValue, setFieldValue] = useState("");
    let [callback, setCallback] = useState({
        message: "",
        status: true
    });

    useEffect(() => {
        setFieldValue(props.value);
    }, [props.value]);

    useEffect(() => {
        validation();
        // eslint-disable-next-line
    }, [fieldValue]);

    useEffect(() => {
        props.onBlur(props.id, {
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
        if (!minLengthValidation()) { return; }
        if (!maxLengthValidation()) { return; }

        setCallback({ status: true, message: "" });
    }

    let requiredValidation = () => {
        if ((fieldValue.trim().length < 1)) {
            setCallback({ status: false, message: "Este campo é obrigatório." });
            return false;
        }
        return true;
    }

    let minLengthValidation = () => {
        if (props.minLength !== null && (fieldValue.length < props.minLength)) {
            setCallback({ status: false, message: `Digite no mínimo ${props.minLength} caracteres.` });
            return false;
        }
        return true;
    }

    let maxLengthValidation = () => {
        if (props.maxLength !== null && (fieldValue.length > props.maxLength)) {
            setCallback({ status: false, message: `Digite no máximo ${props.maxLength} caracteres.` });
            return false;
        }
        return true;
    }

    return (
        <div className={`field-group ${props.className} ${!callback.status ? `error` : ``}`}>
            <input
                type={props.type}
                className="field"
                id={props.id}
                name={props.id}
                placeholder={props.placeholder}
                value={fieldValue}
                onChange={handleChange}
                onBlur={validation}
            />
            <label htmlFor={props.id}>
                {props.label}
                <div className="callback">{!callback.status && callback.message}</div>
            </label>
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
    maxLength: null
}

export default TextField;