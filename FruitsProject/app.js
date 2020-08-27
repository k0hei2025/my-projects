const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017//fruitsDB" ,{ useNewUrlParser: true });

const fruitSchema = new mongoose.Schema({
  name:String,
  rating:Number,
  review:String
});

const Fruit = mongoose.model("Fruit",fruitSchema);

const fruit = new Fruit ({
  name:"orange",
  rating:10,
  review:"awsome juicy"
});
fruit.save();

const findDocument = function(db,callback){
  const collection = db.collection("fruits");
  collection.find({}).toArray(function(err,fruits){
    assert.equal(err,null);
    console.log("found the following records");
    console.log(fruits);
    callback(fruits);
  });
};