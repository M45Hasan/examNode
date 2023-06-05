const Student = require("../model/regiModel.js");
const emailV = require("../utilis/emailVerification.js");
const nodemailer = require("nodemailer");
async function forgetPassController(req, res) {
  let { email } = req.body;
  let how = await Student.find({ email });
  if (how.length != 0) {
    let randomOpt = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;

    let updateOpt = await Student.findOneAndUpdate(
      { email },
      { opt: randomOpt },
      { new: true }
    );

    emailV(how[0].email, randomOpt, "Password Otp");
    return res.send("Otp sent");
  } else {
    return res.json({ error: "Invalid Email" });
  }
}

module.exports = forgetPassController;
