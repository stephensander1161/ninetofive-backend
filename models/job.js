const mongoose = require('mongoose')

const Schema = mongoose.Schema
const jobSchema = new Schema({
    id: Number,
  seekerId:Number,
  providerId: Number,
  type: String,
  subType: Array,
  size: String,
  city: String,
  address: String,
  estimate: Number,
  description: String,
  priority: String,
  date: String,
  time: String,
  completed: Boolean

    
})

module.exports = mongoose.model('job', jobSchema, 'jobs')