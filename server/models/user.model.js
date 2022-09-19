import mongoose from 'mongoose';
import validator from 'validator';
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    require: [true, 'user must have an email'],
    unique: [true, 'this email is already in use'],
    lowercase: true,
    validate: [validator.isEmail, 'please provide a valid email'],
  },
  password: {
    type: String,
    required: [true, 'please provide a password'],
    minlength: 8,
  },
  password: {
    type: String,
    required: [true, 'please retype your password'],
  },
  
  phone: { type: Number, required: true, unique: true },
  posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
});

export const User = mongoose.model('users', UserSchema);
