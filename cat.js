var mg = require("mongoose");

mg.connect("mongodb://localhost:27017/cat_app", { useNewUrlParser: true });


//cat model
var catSchema = new mg.Schema({
    name: String,
    age: Number,
    temp: String
});

var Cat = mg.model("Cat", catSchema);


// add a cat
var cat1 = new Cat({
    name: "djimy",
    age: 27,
    temp: "joyful"
});

cat1.save(function (err, cat) {
    if(err){
        console.log("error while adding the cat");
    } else {
        console.log("cat added successfully");
        console.log(cat);
    }
});