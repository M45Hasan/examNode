const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Student = require("./model/student.js");
const emailV = require("./utilis/emailVerification.js");
const check = require("./middleware/checker.js");
const nodemon = require("nodemon");
app.use(express.json());
app.listen(4000);

mongoose
  .connect(
    "mongodb+srv://h123:h123@cluster0.voqek12.mongodb.net/practice?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected!"));

app.post("/regi", async (req, res) => {
  let { name, email, pass } = req.body;

  if (name == "") {
    return res.json({ error: "Name required" });
  }
  if (email == "") {
    return res.json({ error: "Email required" });
  }
  if (pass == "") {
    return res.json({ error: "Pass required" });
  }
  res.json({ message: "Well done" });

  let stud = new Student({
    name: name,
    email: email,
    pass: pass,
    code: Math.random(),
  });
  
  stud.save();

  emailV(stud.email, stud.code);

  let token = await jwt.sign({ email: stud.email }, "kl");
  console.log(token);

  console.log(req.body);
});
app.post("/log", async (req, res) => {
  let { email, pass, name } = req.body;
  let stud = await Student.find({ email: email }).select({ pass: 0, _id: 0 });
  res.send(stud);
});

app.get("/", check, (req, res) => {
  let user = [
    {
      name: "Hasan",
      Age: "31",
    },
  ];
  res.json(user);
});
