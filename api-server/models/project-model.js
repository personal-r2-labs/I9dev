const mongoose = require('mongoose');
const { Schema } = mongoose;

const projectSchema = new Schema({
  name: String,
  category: String,
  description: String,
  filePath: String,
  // owner: Schema.Types.ObjectId,
  // dev: Schema.Types.ObjectId,
  messages: Array,
  // status: { Type: String, default: 'waiting', enum: ['waiting','in progress', 'pending', 'completed'] },
  dateLimit: Date,
  solicitation: Boolean
}, {
  timestamps: true
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
