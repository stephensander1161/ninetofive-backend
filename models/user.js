const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const userSchema = new Schema({
  id: Number,
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  confirmPassword: String,
  phoneNumber: Number,
  city: String,
  address: String,
  postalCode: String,
  primarySkill: String,
  secondarySkill: String,
  tertiarySkill: String,
  experience: String,
  earliestCanStart: String,
  daysAvailable: Array,
  biography: String,
  profilePicture: String,
  pastWorkPictures: String,
});

module.exports = mongoose.model("user", userSchema, "users");
