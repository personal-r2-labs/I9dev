const mongoose = require('mongoose');

const { Schema } = mongoose;

const adminSchema = new Schema({
  name: String,
  email: String,
  password: String
},
{
  timestamps: true
});

const Administrator = mongoose.model('Administrator', adminSchema);

module.exports = Administrator;
