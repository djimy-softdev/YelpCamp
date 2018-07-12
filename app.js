var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

//landing page
app.get("/", function (req, res) {
   res.render("landing"); 
});

//campgrounds
var campgrounds = [
    {name: "camp1", image: "https://images.pexels.com/photos/1229942/pexels-photo-1229942.jpeg?auto=compress&cs=tinysrgb&h=350"},
    {name: "camp2", image: "https://images.pexels.com/photos/1228497/pexels-photo-1228497.jpeg?auto=compress&cs=tinysrgb&h=350"},
    {name: "camp3", image: "https://images.pexels.com/photos/1228483/pexels-photo-1228483.jpeg?auto=compress&cs=tinysrgb&h=350"},
    {name: "camp4", image: "https://images.pexels.com/photos/813231/pexels-photo-813231.jpeg?auto=compress&cs=tinysrgb&h=350"},
    {name: "camp5", image: "https://images.pexels.com/photos/1229177/pexels-photo-1229177.jpeg?auto=compress&cs=tinysrgb&h=350"},
];

app.get("/campgrounds", function (req, res) {
    

    res.render("campgrounds", {camps: campgrounds});
})

app.post("/campgrounds", function (req, res) {
    //get data from form and add to camps
    var name = req.body.name;
    var image = req.body.image;
    campgrounds.push({name: name, image: image});

    //redirect to campgrounds page
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function (req, res) {
    res.render("new");
})


//server
app.listen(3000, "localhost", function () {
    console.log("website la ap mache!!!");
}); 