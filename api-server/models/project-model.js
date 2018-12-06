const mongoose = require('mongoose');
const Enterprising = require('./emp-model');
const Developer = require('./dev-model');

const Schema = mongoose.Schema;

const projectSchema = new Schema({
  name: String,
  category: String,
  description: String,
  filePath: String,
  // owner: { type: Schema.Types.ObjectId, ref: 'Enterprising' },
  // dev: { type: Schema.Types.ObjectId, ref: 'Developer' },
  messages: Array,
  // status: { Type: String, default: 'waiting', enum: ['waiting', 'in progress', 'pending', 'completed'] },
  dateLimit: Date,
  solicitation: Boolean
}, 
{
  timestamps: true
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
