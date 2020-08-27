const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req,res){
res.sendFile(__dirname+"/index.html");
  
      });

      app.post("/" , function(req,res){
     console.log (req.body.city);
      const appid = "bc452ea63214234cabd8b38546160206";
   const city = req.body.city;
   const url = "https://api.openweathermap.org/data/2.5/weather?q="+city +"&appid="+appid+"&units=metric"
   https.get(url, function(responder){

    
    responder.on("data" , function(data){
       const WeatherData = JSON.parse(data);
       const temp = WeatherData.main.temp_max 
       const icon = WeatherData.weather[0].icon
       const temp2 = WeatherData.weather[0].description 
       const url = "http://openweathermap.org/img/wn/"+icon+"@2x.png" 
       
      res.write("<h1>The MAx Temp in "+req.body.city+" is  "+temp+"</h1>");
      res.write("<h1>the weather in "+req.body.city+" is "+temp2+"</h1>");
      
      res.write("<img src="+url+">" );
      res.send();
        
      });
      
     })
   })
   // const appid = "bc452ea63214234cabd8b38546160206";
   // const city = "Indore"
   // const url = "https://api.openweathermap.org/data/2.5/weather?q="+city +"&appid="+appid+"&units=metric"
   // https.get(url, function(responder){

   //  console.log(responder.statusCode);
   //  responder.on("data" , function(data){
   //     const WeatherData = JSON.parse(data);
   //     const temp = WeatherData.main.temp_max 
   //     const icon = WeatherData.weather[0].icon
   //     const temp2 = WeatherData.weather[0].description 
   //     const url = "http://openweathermap.org/img/wn/"+icon+"@2x.png" 
   //     console.log(icon); 
   //    res.write("<h1>The MAx Temp in indore is  "+temp+"</h1>");
   //    res.write("<h1>the weather in indore is "+temp2+"</h1>");
      
   //    res.write("<img src="+url+">" );
   //    res.send();
// })
app.listen(3000,function(){
    console.log("its running");
})
