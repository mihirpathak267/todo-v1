const express = require("express");

const bodyParser = require("body-parser");

const app = express();

app.get("/", function(req, res){
    res.send("Hello");
});


app.listen(4040, function(req, res){
    console.log("Server is listening at port 4040...");
})