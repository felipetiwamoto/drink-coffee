let nedb = require("nedb");

let db = new nedb({ 
    filename: "./database/product.db", 
    autoload: true 
});

module.exports.all = () => {
    return [];
}

module.exports.find = () => {
    return {};
}

module.exports.create = () => {
    return {};
}

module.exports.update = () => {
    return {};
}

module.exports.delete = () => {
    return {};
}