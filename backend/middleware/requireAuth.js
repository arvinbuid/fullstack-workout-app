const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const requireAuth = async (req, res, next) => {
  const {authorization} = req.headers;

  // check if authorization header is present
  if (!authorization) {
    return res.status(401).json({error: "Authorization token required."});
  }

  const token = authorization.split(" ")[1];
  
  try {
    // verify token and extract the user id(_id)
    const {_id} = jwt.verify(token, process.env.SECRET);

    // if token is verified, fetch user from db using _id
    req.user = await User.findOne({_id}).select("_id");
    next();
  } catch (error) {
    res.status(401).json({error: "Request is not authorized."});
  }
};

module.exports = requireAuth;
