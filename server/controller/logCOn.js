const Student = require("../model/regiModel.js");
const bcrypt = require("bcrypt");

async function logController(req, res) {
  let { pass, email } = req.body;

  let how = await Student.find({ email });
  console.log(how[0].pass);
  if (how.length != 0) {
    bcrypt.compare(pass, how[0].pass, function (err, result) {
      if (result == true) {
        res.json({
          success: "Login Success",
          fName: how[0].fname,
          lName: how[0].lname,
        });
      } else {
        res.send("Invalid Entry");
      }
    });
  } else {
    res.send("Invalid Entry");
  }
}

module.exports = logController;
