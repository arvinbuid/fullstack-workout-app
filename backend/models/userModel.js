const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const validator = require("validator");

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// static signup method
userSchema.statics.signup = async function (email, password) {
  // validation

  // check if email && password is null
  if (!email || !password) {
    throw new Error("Please fill in all required fields.");
  }

  // check if valid email
  if (!validator.isEmail(email)) {
    throw new Error("Enter a valid email address.");
  }

  // check if strong password
  if (!validator.isStrongPassword(password)) {
    throw new Error("Password is not strong enough.");
  }

  const userEmailExists = await this.findOne({email});

  // check if user email exists
  if (userEmailExists) {
    throw new Error("Email already in use");
  }

  // create salt
  const salt = await bcrypt.genSalt(10);
  // create hash
  const hash = await bcrypt.hash(password, salt);
  // create user
  const user = this.create({email, password: hash});

  return user;
};

// static login method
userSchema.statics.login = async function (email, password) {
  // check if email && password is null
  if (!email || !password) {
    throw new Error("Please fill in all required fields.");
  }

  const user = await this.findOne({email});

  // find user with particular email
  if (!user) {
    throw new Error("Incorrect email.");
  }

  const match = await bcrypt.compare(password, user.password);

  // check if password match
  if (!match) {
    throw new Error("Incorrect password");
  }

  return user;
};

module.exports = mongoose.model("User", userSchema);
