const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const subSkillSchema = new Schema({
  id: Number,
  name: String,
});

module.exports = mongoose.model("subSkill", subSkillSchema, "subSkills");
