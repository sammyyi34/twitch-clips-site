const { User, Clip, Comment } = require('../models')

const resolvers = {
  Query: {
    viewUsers: async () => {
      return await User.find();
    }
  },

  // Mutation: {

  // }
};

module.exports = resolvers;