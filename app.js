const express = require("express");

const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

var currentDay = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
app.get("/", function(req, res){
    var today = days[currentDay.getDay()]; 
    res.render("index", {today: today});
});


app.listen(4040, function(req, res){
    console.log("Server is listening at port 4040...");
})