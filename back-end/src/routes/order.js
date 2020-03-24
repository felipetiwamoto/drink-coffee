module.exports = (app) => {

    app.get("/order", (req, res) => {
        let controller = app.src.controllers.order;
        controller.index(app, req, res);
    })

    app.get("/order/:id", (req, res) => {
        let controller = app.src.controllers.order;
        controller.show(app, req, res);
    })

    app.post("/order", (req, res) => {
        let controller = app.src.controllers.order;
        controller.store(app, req, res);
    })

    app.put("/order/:id", (req, res) => {
        let controller = app.src.controllers.order;
        controller.update(app, req, res);
    })

    app.delete("/order/:id", (req, res) => {
        let controller = app.src.controllers.order;
        controller.delete(app, req, res);
    })

}