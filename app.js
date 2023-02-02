const express = require("express");

const bodyParser = require("body-parser");
const { urlencoded } = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

let items = ["buy food", "cook food", "eat food"];
let currentDay = new Date();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
app.get("/", function(req, res){
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }
    // var today = days[currentDay.getDay()]; 
    let day = currentDay.toLocaleDateString("en-US", options);
    res.render("index", {today: day, newItems:items});
});

app.post("/", function(req, res){
    let item = req.body.newItem;
    items.push(item);

    res.redirect("/");
});


app.listen(4040, function(req, res){
    console.log("Server is listening at port 4040...");
})