module.exports.login = async (app, req, res) => {
    let model = app.src.models.member;
    let member = await model.find(req.body.data);
    console.log(member);
    if(member){
        delete member.password;
    }
    res.json(member);
    res.status(200);
    res.end();
}

module.exports.register = (app, req, res) => {
    res.json(req.body);
    res.status(200);
    res.end();
}