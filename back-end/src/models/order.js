let nedb = require("nedb");

let db = new nedb({ 
    filename: "./database/order.db", 
    autoload: true 
});

module.exports.all = () => {
    return new Promise((resolve, reject) => {
        db.find({ status: { $ne: "pago" }}).sort({ created_at: -1 }).exec((error, data) => {
            resolve(data);
        })
    })
}

module.exports.find = () => {
    return {};
}

module.exports.create = (body) => {
    body.created_at = new Date().getTime();
    db.insert(body, (error, data) => (true));
}

module.exports.update = (_id, body) => {
    db.update({ _id }, body, (error) => (true));
}

module.exports.delete = () => {
    return {};
}