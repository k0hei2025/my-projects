const express = require("express");
const https = require("https");
const request = require("request");
const bodyParser = require("body-parser");
const app = express();

app.use(express.static("public"));                 // is library me tu jo llocal files hoti hai na jo uplaod ni hopati wo is method se hojati hai n
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/signup.html");
})


app.post("/",function (req,res) {

    const firstName = req.body.fname;
    const lastName = req.body.lname;
    const Email = req.body.email;
const data = {
        member: [
            {
                email_address: Email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME:  lastName
                }
            }
        ]          
    }
    const  jsonData  = JSON.stringify(data);
    
        const url = "https://us17.api.mailchimp.com/3.0/lists/1701d0ff29";

        const options = {
            method: "POST",
            auth: "vaibhav:30f0f312f65c1cfb27798a8319ef71c5-us17" 
        }

        const request = https.request(url, options,function(response){
            response.on("data",function(data){
                console.log(JSON.parse(data));
            })
        })
        request.write(jsonData);
         request.end();
        
    })
    
  
app.listen(3000 , function(req,res){
    console.log("checking the server");
})


// 30f0f312f65c1cfb27798a8319ef71c5-us17  API Key!

// 1701d0ff29 unique id