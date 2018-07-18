var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mg = require("mongoose");

mg.connect("mongodb://localhost:27017/yelpcamp", { useNewUrlParser: true });
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

//SETUP SCHEMA
var campSchema = new mg.Schema({
    name: String,
    image: String
});

var camps = mg.model("camps", campSchema);
/*
camps.create(
    {
        name: "djimy",
        image: "https://images.pexels.com/photos/1229942/pexels-photo-1229942.jpeg?auto=compress&cs=tinysrgb&h=350"
    },
    function (err, camp) {
        if(err){
            console.log(err);
        } else {
            console.log("newly created campgrounds");
            console.log(camp);
        }
    }
);
*/

//landing page
app.get("/", function (req, res) {
   res.render("landing"); 
});

app.get("/campgrounds", function (req, res) {
    //get all camps from the database
    camps.find({}, function (err, campgrounds) {
        if(err){
            console.log(err);
        } else {
            res.render("campgrounds", {camps: campgrounds});
        }
    });
})

app.post("/campgrounds", function (req, res) {
    //get data from form and add to camps
    var name = req.body.name;
    var image = req.body.image;
    var newCamp = {name: name, image: image};
    camps.create(newCamp, function (err, newCamp) {
        if(err){
            console.log(err);
        } else {
            res.redirect("/campgrounds");
        }
    });
});

app.get("/campgrounds/new", function (req, res) {
    res.render("new");
})


//server
app.listen(3000, "localhost", function () {
    console.log("website la ap mache!!!");
}); 