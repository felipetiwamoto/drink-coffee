let nedb = require("nedb");

let db = new nedb({ 
    filename: "./database/member.db", 
    autoload: true 
});

module.exports.create = (data) => {
    db.insert(data, (error, data) => (true));
}

module.exports.find = () => {
    return new Promise((resolve, reject) => {
        db.find({}).sort({ created_at: -1 }).exec((error, data) => {
            resolve(data);
        })
    })
}