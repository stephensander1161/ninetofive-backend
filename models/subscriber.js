const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const subscriberSchema = new Schema({
  id: Number,
  email: String,
});

module.exports = mongoose.model("subscriber", subscriberSchema, "subscribers");
