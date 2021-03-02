const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const testimonialSchema = new Schema({
  id: Number,
  body: String,
});

module.exports = mongoose.model(
  "testimonial",
  testimonialSchema,
  "testimonials"
);
