let nedb = require("nedb");

let db = new nedb({ 
    filename: "./database/member.db", 
    autoload: true 
});

module.exports.create = (data) => {
    db.insert(data, (error, data) => (true));
}

module.exports.find = (body) => {
    return new Promise((resolve, reject) => {
        db.findOne({ email: body.email, password: body.password }).exec((error, data) => {
            resolve(data);
        })
    })
}