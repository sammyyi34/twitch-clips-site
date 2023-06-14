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
  createdAt: {
    type: Date,
    default: Date.now,
    get: createdDate => new Date(createdDate).toLocaleDateString(),
  },
  views: {
    type: Number,
    required: true
  },
  comments: [commentSchema]
})

clipSchema.virtual('commentCount').get(function () {
  return this.comments.length;
});

const Clip = model('Clip', clipSchema);
module.exports = Clip;