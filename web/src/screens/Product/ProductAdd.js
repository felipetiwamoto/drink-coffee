import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";

import Callback from "./../../components/Callback";
import Header from "./../../components/Header";
import Menu from "./../../components/Menu";
import TextField from "./../../components/TextField";
import { set_callback } from '../../redux/actions/callbacks';

import { api } from "./../../helpers";

let ProductAdd = (props) => {

    let dispatch = useDispatch();

    let callbacks = useSelector((state) => (state.callbacks));
    const [form, setForm] = useState({
        name: {
            value: "",
            status: false
        },
        description: {
            value: "",
            status: false
        },
        price: {
            value: "",
            status: false
        },
        category: {
            value: "",
            status: false
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
            name: form.name.value,
            description: form.description.value,
            price: form.price.value,
            category: form.category.value
        };

        await api.post("/product", data);
        dispatch(set_callback({
            _id: Math.random(),
            status: "success",
            message: "Produto adicionado com sucesso."
        }));

        setForm({
            name: {
                value: "",
                status: false
            },
            description: {
                value: "",
                status: false
            },
            price: {
                value: "",
                status: false
            },
            category: {
                value: "",
                status: false
            }
        });
    }

    return (
        <div id="product-list">
            <div className="callback">
                {callbacks.length > 0 && callbacks.map((callback) => (<Callback key={callback._id} {...callback} />))}
            </div>
            <Header />
            <Menu />
            <div className="container">
                <div className="product-group">
                    <h3 className="title">Novo Produto</h3>
                    <div className="wg grid">
                        <div className="col-md-4-12">
                            <TextField
                                id="name"
                                label="Nome do produto"
                                placeholder="Ex: Bolo de morango"
                                onBlur={handleFieldChange}
                            />
                            <TextField
                                id="description"
                                label="Descrição"
                                placeholder="Ex: Feito com massa de chocolate, suspiro e morango..."
                                onBlur={handleFieldChange}
                            />
                            <TextField
                                id="price"
                                label="Preço do produto"
                                placeholder="Ex: 5.50"
                                onBlur={handleFieldChange}
                            />
                            <TextField
                                id="category"
                                label="Categoria do produto"
                                placeholder="Ex: Sobremesa, Lanche, Salgado ou Bebida"
                                onBlur={handleFieldChange}
                            />
                            <div className="field-group">
                                <button onClick={handleSubmit} type="button" className="button">Criar Produto</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default ProductAdd;