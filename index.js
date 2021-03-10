var express = require("express");
var app = express();
var fetch = require("node-fetch");
var port = 8000;
var router = express.Router();
app.set("view engine", "ejs");


let url = "https://api.rootnet.in/covid19-in/stats/latest";

let settings = { method: "Get" };


app.get("/", function (req, res) {
    fetch(url, settings)
        .then(res => res.json())
        .then((json) => {
            res.render("index", {
                data_api: json
            });
        });

});


app.listen(port, () => console.log(`App listening on port ${port}!`));
