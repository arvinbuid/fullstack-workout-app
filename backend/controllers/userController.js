const User = require("../models/userModel");

// user login
const userLogin = async (req, res) => {
  res.json({message: "user login"});
};

// user signup
const userSignup = async (req, res) => {
  res.json({message: "user signup"});
};

module.exports = {
  userLogin,
  userSignup,
};
