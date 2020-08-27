const express = require("express");
const bodyparsier = require("body-parser");
const app = express();
app.use(bodyparsier.urlencoded({extended:true}));
const port = 3000

app.get("/",function(req,res){
res.sendFile(__dirname+"/Bmi.html");    
});

app.post("/",function(req,res){
    var height = Number(req.body.val1);
    var weight = Number(req.body.val2);
    var value = weight/(height*height);
    console.log(""+value);
    // if (calc >18.5)
    // {
    // res.send("you are over Weight"+calc);
    // }
    // else if(calc<18.5)
    // {
    // res.send("you are under Weight"+calc);
    // }
    // else
    // {
    //     res.send("you are lightWeight"+calc);
    // }
});

app.listen(3000,function(req,res)
{
    console.log("check server");
});