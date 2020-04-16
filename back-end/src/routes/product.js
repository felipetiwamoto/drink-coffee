module.exports = (app) => {

    app.get("/product", (req, res) => {
        let controller = app.src.controllers.product;
        controller.index(app, req, res);
    })

    app.get("/product/:id", (req, res) => {
        let controller = app.src.controllers.product;
        controller.show(app, req, res);
    })

    app.post("/product", (req, res) => {
        let controller = app.src.controllers.product;
        controller.store(app, req, res);
    })

    app.put("/product/:id", (req, res) => {
        let controller = app.src.controllers.product;
        controller.update(app, req, res);
    })

    app.delete("/product/:id", (req, res) => {
        let controller = app.src.controllers.product;
        controller.delete(app, req, res);
    })

}