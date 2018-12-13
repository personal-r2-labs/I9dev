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
  posts: Array,
  status: {
    type: String,
    default: 'waiting',
    enum: ['waiting', 'in progress', 'pending', 'completed']
  },
  dateLimit: Date,
  solicitation: Boolean
}, {
  timestamps: true
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
