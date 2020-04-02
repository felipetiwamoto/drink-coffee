import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

import { set_callback } from "./../../redux/actions/callbacks";

import Callback from "./../../components/Callback";
import Menu from "./../../components/Menu";
import SelectField from "./../../components/SelectField";
import TextField from "./../../components/TextField";

import { api } from "./../../helpers";

let ProductEdit = (props) => {

    let dispatch = useDispatch();
    let callbacks = useSelector((state) => (state.callbacks));
    let [product, setProduct] = useState({
        name: "",
        description: "",
        price: "",
        category: ""
    });

    let [form, setForm] = useState({
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

    let getProduct = async () => {
        let result = await api.get(`/product/${props.match.params.id}`);
        setProduct(result.data);
    }

    useEffect(() => {
        getProduct();
    }, [])

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
                message: "Preenche o formulário corretamente."
            }));
            return;
        }

        let data = {
            name: form.name.value,
            description: form.description.value,
            price: form.price.value,
            category: form.category.value
        };

        await api.put(`/product/${props.match.params.id}`, data);
        dispatch(set_callback({
            _id: Math.random(),
            status: "success",
            message: "Produto alterado com sucesso."
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
        <div id="product-edit">
            <div className="callback">
                {callbacks.length > 0 && callbacks.map((callback) => (<Callback key={callback._id} {...callback} />))}
            </div>
            <div className="container">
                <div className="wg grid">
                    <div className="col-md-3-12">
                        <Menu />
                    </div>
                    <div className="col content">
                        <h3 className="title">Novo Produto</h3>
                        <div className="wg grid">
                            <div className="col-lg-6-12 col-md-12-12">
                                <TextField
                                    id="name"
                                    label="Nome do produto"
                                    placeholder="Ex: Bolo de morango"
                                    value={product.name}
                                    onBlur={handleFieldChange}
                                />
                                <TextField
                                    id="description"
                                    label="Descrição"
                                    placeholder="Ex: Feito com massa de chocolate, suspiro e morango..."
                                    value={product.description}
                                    onBlur={handleFieldChange}
                                />
                                <TextField
                                    id="price"
                                    label="Preço do produto"
                                    placeholder="Ex: 5.50"
                                    value={product.price}
                                    onBlur={handleFieldChange}
                                />
                                <SelectField
                                    id="category"
                                    label="Categoria do produto"
                                    value={product.category}
                                    onChange={handleFieldChange}
                                    options={[
                                        { value: '', label: 'Selecione' },
                                        { value: 'Sobremesa', label: 'Sobremesa' },
                                        { value: 'Lanche', label: 'Lanche' },
                                        { value: 'Salgado', label: 'Salgado' },
                                        { value: 'Bebida', label: 'Bebida' },
                                    ]}
                                />
                                <div className="field-group">
                                    <button onClick={handleSubmit} type="button" className="button fluid button--primary">Criar Produto</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default ProductEdit;