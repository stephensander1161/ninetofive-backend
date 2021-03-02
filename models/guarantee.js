const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const guaranteeSchema = new Schema({
  content: String,
});

module.exports = mongoose.model("guarantee", guaranteeSchema, "guarantees");
