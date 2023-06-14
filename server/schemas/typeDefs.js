const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    twitchAccount: String!
    clips: [Clip]
    friends: [User]
    friendCount: Int!
  }

  type Clip {
    _id: ID!
    streamerName: String!
    title: String!
    createdAt: String
    views: Int!
    comments: [Comment]!
    commentCount: Int!
  }

  type Comment {
    commentId: ID!
    commentText: String!
    username: String!
    createdAt: String
  }

  """ 
  -----> finish the rest <-----
  """

  type Query {
    viewUsers: [User]
  }
`;

module.exports = typeDefs;