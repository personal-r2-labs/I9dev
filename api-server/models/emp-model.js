const mongoose = require('mongoose');

const { Schema } = mongoose;

const empSchema = new Schema({
  name: String,
  email: String,
  password: String,
  linkedinID: String,
  linkedinURL: String,
  linkedinToken: String,
  facebookID: String,
  facebookToken: String,
  description: String,
  photoPath: String
},
{
  timestamps: true
});

const Enterprising = mongoose.model('Enterprising', empSchema);

module.exports = Enterprising;
