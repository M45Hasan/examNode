const Student = require("../model/regiModel.js");
const bcrypt = require("bcrypt");
async function resetPassController(req, res) {
  let { email, pass } = req.body;
  let updateMatchOpt = await Student.findOneAndUpdate({email},{matchOpt:false},{new:true})
  bcrypt.hash(pass, 5, async function (err, hash) {
    let how = await Student.findOneAndUpdate(
      { email },
      { pass: hash },
      { new: true }
    );
  });
  
  return res.send("Reset Password Completed")
}

module.exports = resetPassController;
