let nedb = require("nedb");

let db = new nedb({ 
    filename: "./database/order.db", 
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

module.exports.update = (_id, body) => {
    db.update({ _id }, body, (error) => (true));
}

module.exports.delete = () => {
    return {};
}