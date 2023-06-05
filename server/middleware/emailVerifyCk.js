const Student = require("../model/regiModel.js");

async function emailVeriChecker(req, res, next) {
  let { email } = req.body;
  let how = await Student.find({ email });
  if (how[0].verified) {
    next();
  } else {
    return res.send("Verify your Email");
  }
}

module.exports = emailVeriChecker;
