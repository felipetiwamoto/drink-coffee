import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { set_logged } from "./../../redux/actions/logged";
import { set_callback } from "./../../redux/actions/callbacks";

import { set } from "./../../helpers";

import Callback from "./../../components/Callback";
import TextField from "./../../components/TextField";
import { api } from "./../../helpers";

let Login = (props) => {

    let dispatch = useDispatch();
    let history = useHistory();

    let callbacks = useSelector((state) => (state.callbacks));

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
        if (!formValidate()) {
            dispatch(set_callback({
                _id: Math.random(),
                status: "error",
                message: "Os dados do formulário estão incorretos."
            }))
            return;
        }

        let data = {
            email: form.email.value,
            password: form.password.value,
        }

        let logged = {};

        logged = await api.post("/member/login", { data })
        logged = logged.data;
        if (!logged) {
            dispatch(set_callback({
                _id: Math.random(),
                status: "error",
                message: "Usuário não encontrado."
            }))
            return false;
        }

        set("logged", logged);
        dispatch(set_logged(logged));
        history.push("/produtos");
    }

    return (
        <div id="page-login">
            <div className="callback">
                {callbacks.length > 0 && callbacks.map((callback) => (<Callback key={callback._id} {...callback} />))}
            </div>
            <div className="left">
                <div className="image"></div>
            </div>
            <div className="right">
                <div className="form">
                    <TextField
                        onBlur={handleFieldChange}
                        id="email"
                        label="E-mail"
                        placeholder="Ex: joao.da.silva@gmail.com"
                    />
                    <TextField
                        onBlur={handleFieldChange}
                        minLength={3}
                        type="password"
                        id="password"
                        label="Senha"
                        placeholder="Digite sua senha"
                    />
                    <div className="wg grid jce">
                        <div className="col-lg-4-12 col-md-5-12 col-sm-4-12 col-xs-12-12">
                            <button
                                className="button fluid button--secondary"
                                onClick={handleSubmit}
                            >Entrar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Login;