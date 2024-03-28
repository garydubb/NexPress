import client from '@/utils/apollo/ApolloClient';
import { useMutation } from '@apollo/client';
import { GET_USER, LOGIN_USER, REFRESH_TOKEN } from '../../queries/login';

interface LoginResponse {
  login: {
    authToken: string;
  };
}

interface LoginVars {
  username: string;
  password: string;
}

interface RefreshTokenResponse {
  refreshJwtAuthToken: {
    authToken: string;
  };
}

interface RefreshTokenVars {
  token: string;
}

export function useAuthService() {
  const [loginUser] = useMutation<LoginResponse, LoginVars>(LOGIN_USER);
  const [refreshJwtAuthToken] = useMutation<
    RefreshTokenResponse,
    RefreshTokenVars
  >(REFRESH_TOKEN);

  const login = async (
    username: string,
    password: string,
  ): Promise<boolean> => {
    try {
      const { data } = await loginUser({
        variables: {
          username: username,
          password: password,
        },
      });

      if (data && data.login && data.login.authToken) {
        if (typeof window !== 'undefined') {
          localStorage.setItem('jwt-token', data.login.authToken);
          return true;
        }
        console.log('You are logged in');
      }
    } catch (error) {
      console.error('An error occurred while logging in:', error);
      return false;
    }
  };

  const checkToken = async (): Promise<boolean> => {
    let token = null;
    if (typeof window !== 'undefined') {
      token = localStorage.getItem('jwt-token');
    }

    if (!token) {
      return false;
    }

    try {
      const { data } = await refreshJwtAuthToken({
        variables: {
          token: token,
        },
      });

      if (
        data &&
        data.refreshJwtAuthToken &&
        data.refreshJwtAuthToken.authToken
      ) {
        if (typeof window !== 'undefined') {
          // The token is valid, save the new token
          localStorage.setItem('jwt-token', data.refreshJwtAuthToken.authToken);
        }
        return true;
      }

      return false;
    } catch (error) {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('jwt-token');
      }
      //console.error('An error occurred while checking the token:', error);
      return false;
    }
  };

  const logout = async (): Promise<boolean> => {
    const token = localStorage.getItem('jwt-token');
    if (token) {
      localStorage.removeItem('jwt-token');
      return false;
    }
  };

  const getUserDetails = async (): Promise<any> => {
    try {
      const { data } = await client.query({ query: GET_USER });

      return data;
    } catch (error: any) {
      localStorage.removeItem('jwt-token');
      console.log(error);
    }
  };

  return { login, checkToken, logout, getUserDetails };
}
