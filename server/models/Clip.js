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
    required: true,
    trim: true
  },
  date: {
    type: String,
    required: true
  },
  views: {
    type: Number,
    required: true
  },
  thumbnail: {
    type: String,
    required: true
  },
  clipUrl: {
    type: String,
    required: true
  },
  comments: [commentSchema]
})

clipSchema.virtual('commentCount').get(function () {
  return this.comments.length;
});

const Clip = model('Clip', clipSchema);
module.exports = Clip;