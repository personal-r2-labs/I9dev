import mongoose, { model } from 'mongoose';

const { Schema } = mongoose;

const empSchema = new Schema({
  name: String,
  email: String,
  password: String,
  linkedinID: String,
  linkedinURL: String,
  linkedinToken: String,
  facebookID: String,
  facebookToken: String,
  description: String,
  photoPath: String
},
{
  timestamps: true
});

const Enterprising = model('Enterprising', empSchema);

export default Enterprising;
