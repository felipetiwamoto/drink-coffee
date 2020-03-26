let nedb = require("nedb");

let db = new nedb({ 
    filename: "./database/product.db", 
    autoload: true 
});

module.exports.all = () => {
    return new Promise((resolve, reject) => {
        db.find({}).exec((error, data) => {
            resolve(data);
        })
    })
}

module.exports.find = () => {
    return {};
}

module.exports.create = (body) => {
    db.insert(body, (error, data) => (true));
}

module.exports.update = () => {
    return {};
}

module.exports.delete = () => {
    return {};
}