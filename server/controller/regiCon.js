const jwt = require("jsonwebtoken");
const emailV = require("../utilis/emailVerification.js");
const nameValid = require("../utilis/nameValidation.js");

const emailValid = require("../utilis/emailValidation.js");
const Student = require("../model/regiModel.js");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");

async function registController(req, res) {
  let { fname, lname, email, pass } = req.body;
  //#####Name Validation start #####
  if (nameValid(fname)) {
    return res.json({ error: "firstName required" });
  }
  if (nameValid(lname)) {
    return res.json({ error: "lastName required" });
  }
  //#####Name Validation end #####

  if (emailValid(email)) {
    return res.json({ error: "Email Required" });
  }
  //#####Pass Validation start #####
  if (pass == "") {
    return res.json({ error: "Pass required" });
  } else {
    let existingEmail = await Student.find({ email });
    if (existingEmail.length > 0) {
      return res.json({ error: "Email Required" });
    }
    bcrypt.hash(pass, 5, async function (err, hash) {
      let stud = new Student({
        fname: fname,
        lname: lname,
        email: email,
        pass: hash,
        code: Math.floor(Math.random() * (9999 - 1000 + 1)) + 990,
      });

      stud.save();
      // let how= await Student.find({}).select({pass:0})
      // res.json(how)
      emailV(stud.email, stud.code,"Verification");
      res.json({
        registration: "success",
        fname: stud.fname,
        lname: stud.lname,
      });
    });
  }
  //#####Pass Validation end #####

  // let token = await jwt.sign({ email: stud.email }, "kire");
  // console.log(token);

  // console.log(req.body);
}
module.exports = registController;
