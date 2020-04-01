import React, { useState, useEffect } from 'react';

let TextField = (props) => {

    let [hasChanged, setHasChanged] = useState(false);
    let [fieldValue, setFieldValue] = useState("");
    let [callback, setCallback] = useState({
        message: "",
        status: true
    });

    useEffect(() => {
        if (props.value && props.value.trim().length > 0) {
            setFieldValue(props.value);
            handleBlur();
        }
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        if (!hasChanged) { 
            setHasChanged(true);
            return; 
        }

        props.onBlur(props.id, {
            value: fieldValue,
            status: callback.status
        });
        // eslint-disable-next-line
    }, [callback]);

    let handleChange = (e) => {
        setFieldValue(e.target.value);
    }

    let handleBlur = () => {
        if (!props.mandatory) {
            setCallback({ message: "", status: true });
            return true;
        }

        if (!checkMandatory()) { return; };
        if (!checkMinLength()) { return; };
        if (!checkMaxLength()) { return; };
    }

    let checkMandatory = () => {
        if (fieldValue.length < 1 || fieldValue.trim() === "") {
            setCallback({
                message: "Este campo é obrigatório!",
                status: false
            });
            return false;
        }

        setCallback({ message: "", status: true });
        return true;
    }

    let checkMinLength = () => {
        if (fieldValue.length < props.minLength) {
            setCallback({
                message: `Digite no máximo ${props.minLength} caracteres.`,
                status: false
            });
            return false;
        }

        setCallback({ message: "", status: true });
        return true;
    }


    let checkMaxLength = () => {
        if (props.maxLength !== null && fieldValue.length > props.maxLength) {
            setCallback({
                message: `Digite no mínimo ${props.maxLength} caracteres.`,
                status: false
            });
            return false;
        }

        setCallback({ message: "", status: true });
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
                onChange={(e) => handleChange(e)}
                onBlur={() => handleBlur()}
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
    maxLength: null,
}

export default TextField;