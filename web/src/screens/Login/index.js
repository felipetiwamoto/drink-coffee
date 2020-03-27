import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { set_logged } from "./../../redux/actions/logged";

import TextField from "./../../components/TextField";
import Axios from 'axios';

let Login = (props) => {

    let dispatch = useDispatch();
    let history = useHistory();

    let [form, setForm] = useState({
        email: {
            value: "",
            status: false,
        },
        password: {
            value: "",
            status: false,
        }
    });

    let handleFieldChange = (key, field) => {
        setForm({ ...form, [key]: field });
    }

    let formValidate = () => {
        let checker = true;

        Object.keys(form).forEach((key) => {
            if (!form[key].status) {
                checker = false;
            }
        })

        return checker;
    }

    let handleSubmit = async () => {
        if (!formValidate()) { return; }

        let data = {
            email: form.email.value,
            password: form.password.value,
        }

        let logged = {};

        logged = await Axios.post("http://localhost:3333/member/login", { data })
        logged = logged.data;
        if (!logged) {
            return false;
        }

        dispatch(set_logged(logged));
        history.push("/produtos");
    }

    return (
        <div id="login">
            <div className="form">
                <h3 className="form__title">Login</h3>
                <TextField
                    onBlur={handleFieldChange}
                    id="email"
                    label="E-mail"
                    placeholder="Ex: joao.da.silva@gmail.com"
                />
                <TextField
                    onBlur={handleFieldChange}
                    type="password"
                    id="password"
                    label="Senha"
                    placeholder="Digite sua senha"
                />
                <div className="form-group">
                    <button
                        className="button button--primary"
                        onClick={() => handleSubmit()}
                    >Entrar
                    </button>
                </div>
            </div>
        </div>
    );

}

export default Login;