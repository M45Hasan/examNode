const express = require("express");
const jwt = require("jsonwebtoken");
const Student = require("./model/regiModel.js");
const check = require("./middleware/checker.js");
const tokenCk = require("./middleware/tokenChecker.js");
const dbConnect = require("./config/db.js");
const nodemon = require("nodemon");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
dotenv.config();
const routes = require("./routes/index.js");
const app = express();
app.use(express.json());
app.listen(4000);

dbConnect();
app.use(routes);

// tokenverificastion start #######
app.post("/tokenveri", async (req, res) => {
  let decoded = await jwt.verify(req.headers.authorization, "kire");
  console.log(decoded.email); // bar

  if (Student.find({ email: decoded.email, verified: true })) {
    res.send("Email Verified");
  } else {
    let update = await Student.findOneAndUpdate(
      { email: decoded.email },
      { verified: true },
      { new: true }
    );
    res.send(update);
  }
});

// tokenverificastion end #######

app.post("/log", async (req, res) => {
  let { email, pass, name } = req.body;
  if (
    await Student.find({ email: email, name: name, pass: pass }).select({
      pass: 0,
      _id: 0,
    })
  ) {
    res.send(req.body.email);
  } else {
    res.send("aAuthenticaton Failed");
  }
});

app.get("/", check, (req, res) => {
  let user = [
    {
      name: "Hasan",
      Age: "31",
    },
    {
      name: "Han",
      Age: "30",
    },
  ];
  res.json(user);
});
// collect all user form database start ########

//  let tok =  jwt.sign({ pass: "mern2021" }, "kire");
//  console.log(tok);
app.get("/user", tokenCk, async (req, res) => {
  let us = await Student.find({});

  res.send(us);
});
// collect all user form database end ########
