import mongoose, { model } from 'mongoose';

const { Schema } = mongoose;

const devSchema = new Schema({
  name: String,
  email: String,
  password: String,
  linkedinID: String,
  linkedinURL: String,
  linkedinToken: String,
  githubID: String,
  githubToken: String,
  description: String,
  skills: Array,
  photoPath: String
},
{
  timestamps: true
});

const Developer = model('Developer', devSchema);

export default Developer;
