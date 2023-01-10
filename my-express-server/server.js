//jshint esversion:6

const express = require("express");
const app = express();


app.get("/", function(req, res){
  res.send("hello");
});

app.get("/contact", function(req, res){
  res.send("Contact me at finnthielke1@gmail.com");
});

app.get("/about", function(req, res){
  res.send('My name is finn, I am 20 yrs old, 6"6 and 92kg');
});

app.get("/hobbies", function(req, res){
  res.send("I like gym, mtb and footy");
});

app.listen(3000, function(){
  console.log("server started on port 3000");
});
