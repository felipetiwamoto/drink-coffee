module.exports.index = async (app, req, res) => {
    let model = app.src.models.order;
    let orders = await model.all();
    res.json(orders);
    res.status(200);
    res.end();
}

module.exports.show = (app, req, res) => {
    res.status(200);
    res.end();
}

module.exports.store = (app, req, res) => {
    let model = app.src.models.order;
    model.create(req.body);
    res.status(200);
    res.end();
}

module.exports.update = (app, req, res) => {
    let model = app.src.models.order;
    delete req.body._id;
    model.update(req.params.id, req.body);
    res.status(200);
    res.end();
}

module.exports.delete = (app, req, res) => {
    res.status(200);
    res.end();
}