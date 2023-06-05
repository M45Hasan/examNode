const Student = require("../model/regiModel.js");
async function emailVeriController(req, res) {
    let { email,code}=req.body
    let how = await Student.find({email})
    console.log(how[0].verified)
   
    if( how[0].verified){
        return res.json({error:"Already verified"})
    }


    if(how[0].code==code){
       
        let updateVerify= await Student.findOneAndUpdate({email},{verified:true},{new:true})
        let updateCode= await Student.findOneAndUpdate({email},{code:""},{new:true})
        return res.json({"success":"Email Verified"})

    }
    else{
        return res.json({"error":"Not Match"})
    }

}

module.exports=emailVeriController;