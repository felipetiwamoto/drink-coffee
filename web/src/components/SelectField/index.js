import React, { useState, useEffect } from 'react';

let SelectField = (props) => {

    let [hasChanged, setHasChanged] = useState(false);
    let [fieldValue, setFieldValue] = useState("");
    let [callback, setCallback] = useState({
        message: "",
        status: false
    });

    useEffect(() => {
        if (props.value.trim().length > 0) {
            setFieldValue(props.value);
        }
    }, [props.value]);

    useEffect(() => {
        if(!hasChanged){
            setHasChanged(true);
            return;
        }
        
        checkMandatory();
    }, [fieldValue])

    useEffect(() => {
        if (!hasChanged) {
            setHasChanged(true);
            return;
        }

        props.onChange(props.id, {
            status: callback.status,
            value: fieldValue
        })
        // eslint-disable-next-line
    }, [callback])

    let handleChange = (e) => {
        setFieldValue(e.target.value);
    }

    let checkMandatory = () => {
        if (!props.mandatory) {
            setCallback({ message: "", status: true });
            return true;
        }

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

    return (
        <div className={`field-group ${props.className}`}>
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
    mandatory: true,
}

export default SelectField;