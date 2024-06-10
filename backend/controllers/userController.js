const User = require("../models/userModel");

// user login
const userLogin = async (req, res) => {
  res.json({message: "user login"});
};

// user signup
const userSignup = async (req, res) => {
  const {email, password} = req.body;

  try {
    const user = await User.signup(email, password);

    // if success
    res.status(201).json({email, user});
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

module.exports = {
  userLogin,
  userSignup,
};
