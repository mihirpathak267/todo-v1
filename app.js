const express = require("express");

const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

var currentDay = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
app.get("/", function(req, res){
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }
    // var today = days[currentDay.getDay()]; 
    var day = currentDay.toLocaleDateString("en-US", options);
    res.render("index", {today: day});
});


app.listen(4040, function(req, res){
    console.log("Server is listening at port 4040...");
})