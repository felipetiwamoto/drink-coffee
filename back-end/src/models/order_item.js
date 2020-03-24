let nedb = require("nedb");

let db = new nedb({ 
    filename: "./database/order_item.db", 
    autoload: true 
});

module.exports.all = (orderId) => {
    return [];
}

module.exports.find = (id) => {
    return {};
}

module.exports.create = (orderId) => {
    return {};
}

module.exports.update = (orderId) => {
    return {};
}

module.exports.delete = (orderId) => {
    return {};
}