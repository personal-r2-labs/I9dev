/* eslint-disable no-undef */
/* eslint-disable prefer-destructuring */
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const projectSchema = new Schema({
  title: String,
  category: String,
  description: String,
  // owner: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'User'
  // },
  // dev: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'User'
  // },
  dateLimit: Date,
  solicitation: Boolean
}, {
  timestamps: true
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
