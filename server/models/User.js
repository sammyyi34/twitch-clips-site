const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const bcrypt = require('bcryptjs');


const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please enter a valid email'],
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 8,
  },
  twitchAccount: {
    type: String,
    required: true,
    trim: true
  },
  clips: [{
    type: Schema.Types.ObjectId,
    ref: 'Clip'
  }],
  friends: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }]
});

// pre-save middleware that hashes the password before saving to db
userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    try {
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
    } catch (error) {
      console.error('Error hashing password:', error);
    }
  }
  next();
});

// creates the friend count
userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

const User = mongoose.model('User', userSchema);
module.exports = User;