const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const reviewSchema = new Schema({
  id: Number,
  firstName: String,
  lastName: String,
  rating: Number,
  type: String,
  content: String,
  dateSubscribed: String,
  lastLogin: String,
});

module.exports = mongoose.model("review", reviewSchema, "reviews");
