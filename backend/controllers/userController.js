const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({_id}, process.env.SECRET, {expiresIn: "3d"});
};

// user login
const userLogin = async (req, res) => {
  const {email, password} = req.body;

  try {
    const user = await User.login(email, password);

    // create signup token
    const token = createToken(user._id);

    // if success
    res.status(201).json({email, token});
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

// user signup
const userSignup = async (req, res) => {
  const {email, password} = req.body;

  try {
    const user = await User.signup(email, password);

    // create signup token
    const token = createToken(user._id);

    // if success
    res.status(201).json({email, token});
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

module.exports = {
  userLogin,
  userSignup,
};
