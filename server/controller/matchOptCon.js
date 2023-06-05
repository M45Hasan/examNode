const Student = require("../model/regiModel.js");
async function matchOptController(req,res){
    let {email,opt}=req.body
    
    let how = await Student.find({email})
    if(how[0].opt==opt){
        let updateOpt = await Student.findOneAndUpdate({email},{opt:""},{new:true})
        let updateMatchOpt = await Student.findOneAndUpdate({email},{matchOpt:true},{new:true})

        return res.send("OTP Match")
    }
    else{
        return res.send("Not Match")
    }


}

module.exports=matchOptController;