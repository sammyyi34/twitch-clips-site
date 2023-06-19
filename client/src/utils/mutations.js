import { gql } from '@apollo/client'

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