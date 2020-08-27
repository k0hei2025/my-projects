const express = require("express");
const bodyParser = require("body-parser");
const { urlencoded } = require("body-parser");
const date = require(__dirname+"/date.js")
const app = express();
var items = [];
let workItems = [];
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');
app.get("/",function(req,res)
{
  let day = date.getDay();   
  
  res.sendFile("/",__dirname+"list.ejs");

   
    res.render("list",{Heading:day ,addItems:items});
})
  app.post("/",function(req,res){
 

   
 let task = req.body.toDoList;

    if (req.body.list==="Work"){

      workItems.push(task);
       
    res.redirect("/work");

    }
    else
    {
      items.push(task);
      res.redirect("/");
    }
  })
  app.get("/work",function(req,res){
   
    res.render("list",{Heading:"Work List" ,addItems:workItems});
    
  })
  
  
 app.get("/about",function(req,res){
   res.render("about");
 })



app.listen(3000,function(req,res)
{
    console.log("check this")
})