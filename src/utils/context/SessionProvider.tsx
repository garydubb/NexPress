import { createContext, useEffect, useState } from 'react';

import { useAuthService } from '@/utils/functions/AuthService/AuthService';
import {
  Customer,
  SessionContextProviderInterface,
  SessionContextTypes,
  SessionUser,
  SesstionStatusTypes,
} from './types/session.types';

// create context
export const SessionContext = createContext<SessionContextTypes>({
  user: null,
  status: 'loading',
  isLoggedIn: false,
  updateAndGetUserSession: async () => null,
});

export const SessionContextProvider: React.FC<
  SessionContextProviderInterface
  // eslint-disable-next-line react/prop-types
> = ({ children }): JSX.Element => {
  const [user, setUser] = useState<Customer | null>(null);
  const [status, setStatus] = useState<SesstionStatusTypes>('loading');

  const { checkToken, getUserDetails, logout } = useAuthService();
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    const checkAndFetchUser = async () => {
      try {
        const token = await checkToken();

        if (token) {
          const userSessionData = await getUserDetails();

          setIsLoggedIn(true);
          setUser(userSessionData);
          setStatus('authenticated');
        }
      } catch (error) {
        setIsLoggedIn(false);
        setStatus('unauthenticated');
        await logout();
        console.log('error', error);
      }
    };

    checkAndFetchUser();
  }, []);

  const getUserSession = async (): Promise<SessionUser | null> => {
    setStatus('loading');
    try {
      const token = await checkToken();

      if (token) {
        const userSessionData = await getUserDetails();
        setIsLoggedIn(true);
        setUser(userSessionData);
        setStatus('authenticated');
        return userSessionData;
      } else {
        setUser(null);
        setStatus('unauthenticated');
        return null;
      }
    } catch {
      setUser(null);
      setIsLoggedIn(false);
      setStatus('unauthenticated');
      return null;
    }
  };

  const updateAndGetUserSession = async (): Promise<SessionUser | null> => {
    const data = await getUserSession();

    return data;
  };

  return (
    <SessionContext.Provider
      value={{ user, status, isLoggedIn, updateAndGetUserSession }}
    >
      {children}
    </SessionContext.Provider>
  );
};
