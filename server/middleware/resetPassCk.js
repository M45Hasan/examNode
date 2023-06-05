const Student = require("../model/regiModel.js");


async function resetPassChexker(req, res, next) {
  let { email } = req.body;
  let how = await Student.find({ email });
  if (how[0].matchOpt) {
    next();
  } else {
    return res.send("Invalid");
  }
}

module.exports = resetPassChexker;
