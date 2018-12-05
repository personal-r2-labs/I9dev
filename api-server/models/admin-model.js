import mongoose, { model } from 'mongoose';

const { Schema } = mongoose;

const adminSchema = new Schema({
  name: String,
  email: String,
  password: String
},
{
  timestamps: true
});

const Administrator = model('Administrator', adminSchema);

export default Administrator;
