const { User, Clip, Comment } = require('../models')

const resolvers = {
  Query: {
    viewUsers: async () => {
      return await User.find();
    },
    viewClip: async () => {
      return await Clip.find();
    },
    viewComment: async () => {
      return await Comment.find();
    },
  },

  Mutation: {
    addUser: async (_, args) => {
      const user = await User.create(args);
      return user;
    },
    addClip: async (_, args) => {
      const clip = await Clip.create(args);
      return clip;
    },
    addComment: async (_, args) => {
      const comment = await Comment.create(args);
      return comment;
    },
  },
};

module.exports = resolvers;