const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const devSchema = new Schema({
  name: String,
  email: String,
  password: String,
  linkedinID: String,
  linkedinURL: String,
  githubID: String,
  description: String,
  skills: Array,
  photoPath: String
},
{
  timestamps: true
});

const Developer = mongoose.model('Developer', devSchema);

module.exports = Developer;
