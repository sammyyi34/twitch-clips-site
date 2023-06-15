const mongoose = require('mongoose');

const { Schema, Types } = mongoose;

const commentSchema = new Schema({
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
});

const Comment = mongoose.model('Comment', commentSchema);

// Establish a database connection
mongoose.connect('((//mongodb://localhost/mydatabase// what should i put as a name here ))', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((error) => {
    console.error('Error connecting to the database', error);
  });

async function createComment(commentData) {
  try {
    const comment = new Comment(commentData);
    const savedComment = await comment.save();
    return savedComment;
  } catch (error) {
    console.error('Error creating comment', error);
    throw error;
  }
}

module.exports = {
  Comment,
  createComment,
};
