const express = require("express");

const bodyParser = require("body-parser");
const  date = require(__dirname+"/date.js");
const { urlencoded } = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

let items = ["buy food", "cook food", "eat food"];
let workItems = [];


app.get("/", function(req, res){
    let day = date.getDay();
    res.render("index", {listTitle: day, newItems:items});
});
// work route
app.get("/work", function(req, res){
    res.render("index", {listTitle: "Work List", newItems: workItems})
});

app.post("/work", function(req, res){
    let item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work");

})



app.post("/", function(req, res){
    console.log(req.body);
    let item = req.body.newItem;
    if(req.body.list == "Work"){
        workItems.push(item)
        res.redirect("/work")
    }else{
        items.push(item)
        res.redirect("/");
    }

    
    items.push(item);

    res.redirect("/");
});

app.get("/about", function(req, res){
    res.render("about");
})


app.listen(4040, function(req, res){
    console.log("Server is listening at port 4040...");
})