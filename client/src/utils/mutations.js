import { gql } from '@apollo/client';

export const ADD_CLIPS = gql`
mutation mutateClips($streamerName: String!, $title: String, $date: String, $views: Int, $thumbnail: String, $clipUrl: String) {
  addClip(streamerName: $streamerName, title: $title, date: $date, views: $views, thumbnail: $thumbnail, clipUrl: $clipUrl) {
    clipUrl
    date
    streamerName
    thumbnail
    title
    views
    _id
  }
}
`;

export const ADD_USERS = gql`
  mutation addUser(
    $username: String! 
    $email: String! 
    $password: String! 
    $twitchAccount: String!
  ) {
    addUser(
      username: $username 
      email: $email 
      password: $password 
      twitchAccount: $twitchAccount
    ) {
    token
    user {
      _id
    }
  }
}
`;

export const LOGIN_USER = gql`
  mutation loginUser($username: String!, $password: String!) {
    loginUser(username: $username, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation AddComment($commentText: String, $username: String, $createdAt: String) {
    addComment(commentText: $commentText, username: $username, createdAt: $createdAt) {
      commentId
      commentText
      username
      createdAt
    }
}
`;