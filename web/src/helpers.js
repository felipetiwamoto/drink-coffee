export let get = (name) => {
    return JSON.parse(localStorage.getItem(name)) ?
        JSON.parse(localStorage.getItem(name)) : [];
}

export let set = (name, data) => {
    localStorage.setItem(name, JSON.stringify(data));
}