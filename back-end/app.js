let express = require("express");
let consign = require("consign");
let cors = require("cors");

let app = express();

app.use(express.json());
app.use(cors());

consign()
    .include("./src/routes")
    .then("./src/models")
    .then("./src/controllers")
    .into(app);

app.listen(3333, () => {
    console.log("Server running...");
})