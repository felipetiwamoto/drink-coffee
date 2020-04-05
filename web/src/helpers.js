import axios from "axios";

export let get = (name) => {
    return JSON.parse(localStorage.getItem(name)) ?
        JSON.parse(localStorage.getItem(name)) : [];
}

export let set = (name, data) => {
    localStorage.setItem(name, JSON.stringify(data));
}

export let formValidate = (form) => {
    let checker = true;

    Object.keys(form).forEach((key) => {
        if (!form[key].status) {
            checker = false;
        }
    })

    return checker;
}

export let isLogged = () => {
    return (Object.keys(get("logged")).length > 0);
}

export let api = axios.create({
    baseURL: 'http://localhost:3333',
});