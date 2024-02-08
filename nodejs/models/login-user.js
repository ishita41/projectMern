var mongoose=require("mongoose");
function getUserSchema()
{
    var SchemaClass=mongoose.Schema;
    var colSchema=new SchemaClass({
       
        uid:{type:String,required:true,unique:true,index:true},
        pwd:String,
        dos:{type:Date,default:Date.now},
        type:{type:String},
    },{
        versionKey: false  
    })

    var userColRef=mongoose.model("users",colSchema);
return userColRef;
}
module.exports=getUserSchema;