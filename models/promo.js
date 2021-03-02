const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const promoSchema = new Schema({
  id: Number,
  name: String,
  amount: Number,
  type: String,
  active: String,
});

module.exports = mongoose.model("promo", promoSchema, "promos");
