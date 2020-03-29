import axios from "axios";

export let get = (name) => {
    return JSON.parse(localStorage.getItem(name)) ?
        JSON.parse(localStorage.getItem(name)) : [];
}

export let set = (name, data) => {
    localStorage.setItem(name, JSON.stringify(data));
}

export let api = axios.create({
    baseURL: 'http://localhost:3333',
});