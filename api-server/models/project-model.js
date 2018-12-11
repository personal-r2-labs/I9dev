const mongoose = require('mongoose');
const Enterprising = require('./ent-model');
const Developer = require('./user-model');

const Schema = mongoose.Schema;

const projectSchema = new Schema({
  title: String,
  category: String,
  description: String,
  image: String,
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
