module.exports = (app) => {

    app.post("/member/register", (req, res) => {
        let controller = app.src.controllers.member;
        controller.register(app, req, res);
    })

    app.post("/member/login/", (req, res) => {
        let controller = app.src.controllers.member;
        controller.login(app, req, res);
    })

}