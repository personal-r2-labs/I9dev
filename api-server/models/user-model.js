const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: String,
  password: String,
  linkedinID: String,
  linkedinURL: String,
  githubID: String,
  facebookID: String,
  facebookToken: String,
  description: String,
  skills: Array,
  photoPath: String,
  role: { 
    type: String,
    enum: ['dev', 'ent', 'admin'],
    }
  },
  {
  timestamps: true
  }
);

const User = mongoose.model('User', UserSchema);

module.exports = User;
