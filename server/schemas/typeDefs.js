const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String
    email: String
    password: String
    twitchAccount: String
    clips: [Clip]
  }

  type Clip {
    _id: ID!
    streamerName: String
    title: String
    date: String
    views: Int
    thumbnail: String
    clipUrl: String
    comments: [Comment]
    commentCount: Int
  }

  type Comment {
    commentId: ID!
    commentText: String
    username: String
    createdAt: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    viewUsers: [User]
    viewClip: [Clip]
    viewComment: [Comment]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!, twitchAccount: String!): Auth
    loginUser(username: String!, password: String!): Auth
    addClip(streamerName: String, title: String, date: String, views: Int, thumbnail: String, clipUrl: String): Clip
    addComment(commentText: String, username: String, createdAt: String): Comment
  }
`;

module.exports = typeDefs;