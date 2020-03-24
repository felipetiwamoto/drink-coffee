let express = require("express");
let consign = require("consign");

let app = express();

app.use(express.json());

consign()
    .include("./src/routes")
    .then("./src/models")
    .then("./src/controllers")
    .into(app);

app.listen(3333, () => {
    console.log("Server running...");
})