const mongoose=require("mongoose");
const {Schema}=mongoose;

let userSchema= new Schema({
    name:{
        type:String
    },
     email:{
        type:String
    },
    pass:{
        type:String
    },
    code:{
        type:Number
    }
})

module.exports=mongoose.model("Student",userSchema)