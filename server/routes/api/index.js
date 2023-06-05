const express = require("express");
const _ = express.Router();
const authRoutes = require("./authentication.js");

_.use("/auth", authRoutes);

module.exports = _;
