var express=require("express");
var mongoose=require("mongoose");
var fileupload=require("express-fileupload");
var userrouter = require("./routers/userrouters")
var bp = require("body-parser");
var app=express();
var env=require("dotenv");
env.config();
var cors = require("cors");
app.use(bp.urlencoded({extended:true}));
app.use(express.json({extended:true}));
app.use(cors());
app.use(fileupload());
app.use('/pics',express.static('pics'));
app.use(express.urlencoded({extended:true} ));
app.listen(1001,()=>{
    console.log("hello");
})
app.get("/",(req,resp)=>{
    resp.send("its home page...")
})
const dburl = "mongodb://0.0.0.0:27017/mern2023";
var dbCon=mongoose.connect(dburl).then(()=>{
    console.log("Connected to MongoDb...");
   }).catch((err)=>{
       console.log("Error Occurred: "+err.toString());
       process.exit();
   });
app.use("/user",userrouter);
