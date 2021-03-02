const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const howItWorkSchema = new Schema({
  content: String,
});

module.exports = mongoose.model("howItWork", howItWorkSchema, "HowItWorks");
