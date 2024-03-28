import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation LoginUser($username: String!, $password: String!) {
    login(input: { username: $username, password: $password }) {
      authToken
    }
  }
`;

export const REFRESH_TOKEN = gql`
  mutation RefreshAuthToken($token: String!) {
    refreshJwtAuthToken(input: { jwtRefreshToken: $token }) {
      authToken
    }
  }
`;

export const GET_USER = gql`
  query GET_USER {
    viewer {
      id
      nicename
      name
    }
  }
`;
