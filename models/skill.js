const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const skillSchema = new Schema({
  id: Number,
  name: String,
});

module.exports = mongoose.model("skill", skillSchema, "skills");
