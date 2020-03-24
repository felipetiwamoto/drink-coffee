module.exports.login = (app, req, res) => {
    res.json(req.body);
    res.status(200);
    res.end();
}

module.exports.register = (app, req, res) => {
    res.json(req.body);
    res.status(200);
    res.end();
}