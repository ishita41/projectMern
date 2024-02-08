var express=require("express");
var app=express.Router();
var controllerindex=require("../controllers/indexcontroller");
app.post("/trial",controllerindex.trial);
app.post("/signupuser",controllerindex.signupuser);
app.post("/loginuser",controllerindex.loginuser);
// app.post("/profile",controllerindex.profile);
module.exports=app;