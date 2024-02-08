var getUserSchema=require("../models/login-user"); //function 
var webtoken=require("jsonwebtoken");
var userModalSchema=getUserSchema();//function calling
function trial(req,resp){
    resp.json({status: true, message: "ok"});
    console.log(req.body);
}
async function signupuser(req,resp){
    console.log(req.body);
  const count =   await userModalSchema.find({uid: req.body.uid}).count()
    if(count !== 0){
      resp.json({status: true,message:"Already Exists"});
      console.log(count);
        return;
}
    var obj=userModalSchema(req.body);
   await obj.save().then((doc)=>{
        resp.json({status: true,message:"Done"});
    }).catch((err)=>{
        resp.json({status:false,message:err});
    }) 
}
async function loginuser(req,resp){
    console.log(req.body);
    await userModalSchema.findOne({uid: req.body.email}).then((doc)=>{
        console.log(doc);
        if(req.body.password===doc.pwd)
        resp.json({status: true,message:"Welcome to Dashboard",doc});
    
    else
    resp.json({status:false,message:"wrong password"});
        console.log(doc);
    
    }).catch((err)=>{
        resp.json({status:false,message:err});
    })
}
// async function profile(req,resp){
//     console.log(req.body);
//     var obj=userModalSchema(req.body);
//     await userModalSchema.findOne({uid: req.body.uid}).then((doc)=>{
//         if(req.body.pwd===doc.pwd)
//         resp.json({status: true,message:"Welcome Again",doc});
    
//     else
//     resp.json({status:false,message:"Signup First"});
//         console.log(doc);
    
//     }).catch((err)=>{
//         resp.json({status:false,message:err});
//     })
  
// }
module.exports={trial,signupuser,loginuser}