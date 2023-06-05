const express = require("express");
const _ = express.Router();
const registController = require("../../controller/regiCon.js");
const logController = require("../../controller/logCOn.js");
const forgetPassController = require("../../controller/forgetPassCon.js");
const matchOptController = require("../../controller/matchOptCon.js");
const emailVeriController = require("../../controller/emailVeriCon.js");
const resetPassController = require("../../controller/resetPassCon.js");
const emailVeriChecker = require("../../middleware/emailVerifyCk.js");
const resetPassChexker = require("../../middleware/resetPassCk.js");

_.post("/regi", registController);
_.get("/log", emailVeriChecker, logController);
_.post("/resetPass", resetPassChexker, resetPassController);
_.post("/forgetPass", forgetPassController);
_.post("/matchOpt", matchOptController);
_.post("/emailVerify", emailVeriController);

module.exports = _;
