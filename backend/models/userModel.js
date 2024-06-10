const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

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

// signup and password hash
userSchema.statics.signup = async function (email, password) {
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

module.exports = mongoose.model("User", userSchema);
