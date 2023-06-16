const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const commentSchema = require('./Comment')

const clipSchema = new Schema ({
  streamerName: {
    type: String,
    required: true,
    trim: true
  },
  title: {
    type: String,
    trim: true
  },
  date: {
    type: String
  },
  views: {
    type: Number
  },
  thumbnail: {
    type: String
  },
  clipUrl: {
    type: String
  },
  comments: [commentSchema]
})

clipSchema.virtual('commentCount').get(function () {
  return this.comments.length;
});

const Clip = model('Clip', clipSchema);
module.exports = Clip;