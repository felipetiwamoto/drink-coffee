// // Seeder
// module.exports.index = (app, req, res) => {
//     let model = app.src.models.product;

//     for (let i = 1; i <= 25; i++) {
//         let data = {};
//         data.name = `Nome do salgado ${i}`;
//         data.price = randDecimal(4, 25);
//         data.description = `Descrição do salgado de numero ${i}...`;
//         data.amount = randInteger(7, 35);
//         data.category = "Salgado";

//         model.create(data);
//     }

//     res.status(200);
//     res.end();
// }

module.exports.index = async (app, req, res) => {
    let model = app.src.models.product;
    let products = await model.all();
    res.json(products);
    res.status(200);
    res.end();
}

module.exports.show = (app, req, res) => {
    res.status(200);
    res.end();
}

function randInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function randDecimal(min, max) {
    return (Math.random() * (max - min) + min).toFixed(2);
}

module.exports.store = (app, req, res) => {



    res.status(200);
    res.end();
}

module.exports.update = (app, req, res) => {
    res.status(200);
    res.end();
}

module.exports.delete = (app, req, res) => {
    res.status(200);
    res.end();
}