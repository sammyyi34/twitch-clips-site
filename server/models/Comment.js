const mongoose = require('mongoose');

const { Schema, Types } = mongoose;

const commentSchema = new Schema ({
  commentId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  commentText: {
    type: String,
    required: true,
    maxLength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: createdDate => new Date(createdDate).toLocaleDateString()
  },
})

module.exports = commentSchema;