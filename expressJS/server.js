const express = require("express");

const app = express();

app.get("/", function(request, response){
  response.send("hey ");
});
app.get("/contact",function(req,res){
res.send("my contact 767867865");
});
app.get("/about",function(req,res){
    res.send("my name is k0hei i am collage student");
});
app.get("/hobbies",function(req,res){
    res.send("<h1><li>japanese</li></h1>");
});

app.listen(3000, function()
{
    console.log("my port is started");
});