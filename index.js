const express = require("express");
const bodyParsier = require("body-parser");
const app =  express();
app.use(bodyParsier.urlencoded({extended : true}));
const port = 3001

// app.get("/" , function(req,res){
//  res.sendFile(__dirname+"/side.html");
// });
// app.post("/",function(req,res){

//         var n1 = Number(req.body.num1);
//     var n2 = Number( req.body.num2);
//     var value = n1+n2;
//     res.send(""+value);
// });
app.get("/",function(req,res){
    res.sendFile(__dirname+"/Bmi.html");    
    });
    
    app.post("/",function(req,res){
       
      
        var height = parseFloat(req.body.val1);
        var weight = parseFloat(req.body.val2);
        var value = weight/(height*height);
       
        if (value >18.5)
        {
        res.send("you are over Weight"+value);
        }
        else if(value<18.5)
        {
        res.send("you are under Weight"+value);
        }
        else
        {
            res.send("you are lightWeight"+value);
        }
    });
    
app.listen(3001,function () {
    console.log("my port is started");
  });
