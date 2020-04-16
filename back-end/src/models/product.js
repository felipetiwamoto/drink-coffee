let nedb = require("nedb");

let db = new nedb({ 
    filename: "./database/product.db", 
    autoload: true 
});

module.exports.all = () => {
    return new Promise((resolve, reject) => {
        db.find({}).sort({ name: 1 }).exec((error, data) => {
            resolve(data);
        })
    })
}

module.exports.find = (_id) => {
    return new Promise((resolve, reject) => {
        db.findOne({ _id }).exec((error, data) => {
            resolve(data);
        })
    })
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