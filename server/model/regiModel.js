const mongoose = require("mongoose");
const { Schema } = mongoose;

let userSchema = new Schema({
  fname: {
    type: String,
    required: true,
  },

  lname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  pass: {
    type: String,
    required: true,
  },
  // telephone: {
  //   type: String,
  //   required: true,
  // },
  // addOne: {
  //   type: String,
  // },
  // addTwo: {
  //   type: String,
  // },
  // country: {
  //   type: String,
  // },
  // postCode: {
  //   type: String,
  // },
  // state: {
  //   type: String,
  // },
  code: {
    type: Number,
  },
  opt: {
    type: String,
  },
  matchOpt: {
    type: Boolean,
  },
  verified: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Student", userSchema);
