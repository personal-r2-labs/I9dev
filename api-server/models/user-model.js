/* eslint-disable no-undef */
/* eslint-disable prefer-destructuring */
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  username: String,
  email: String,
  password: String,
  linkedinURL: String,
  linkedinID: String,
  githubURL: String,
  githubID: String,
  facebookURL: String,
  facebookID: String,
  description: String,
  skills: Array,
  photoPath: String,
  role: {
    type: String,
    enum: ['dev', 'ent', 'admin']
  }
},
{
  timestamps: true
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
