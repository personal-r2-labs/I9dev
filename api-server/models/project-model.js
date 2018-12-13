/* eslint-disable no-undef */
/* eslint-disable prefer-destructuring */
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const projectSchema = new Schema({
  title: String,
  sector: String,
  description: String,
  owner: Schema.Types.ObjectId,
  dev: Schema.Types.ObjectId,
  dateLimit: Date,
  solicitation: Boolean,
  status: {
    type: String,
    enum: ['progress', 'canceled', 'finished']
  }
}, {
  timestamps: true
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
