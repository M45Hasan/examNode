function check(req,res,next){
    if(req.headers.authorization==="123"){
        next()
    }
    else{
        res.json({error:"authorization failed"})
    }
}

module.exports=check;