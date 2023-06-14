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
    date: String!
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

  type Query {
    viewUsers: [User]
    viewClip: [Clip]
    viewComment: [Comment]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!, twitchAccount: String!): User
    addClip(streamerName: String!, title: String!, date: String!, views: Int!): Clip
    addComment(commentText: String!, username: String!, createdAt: String): Comment
  }
`;

module.exports = typeDefs;