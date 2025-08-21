import { getToken, removeToken, saveToken } from '@/services/storageService';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

type ContextType = {
  userToken: boolean;
  login?: () => void;
  logout?: () => void;
  isLoading: boolean;
};

const initialState = {
  userToken: false,
  login: () => {},
  logout: () => {},
  isLoading: true,
};

const UserContext = createContext<ContextType>(initialState);

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(initialState.userToken);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const checkToken = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      try {
        const token = await getToken();
        if (token) {
          setIsLoggedIn(true);
        }
      } catch (e) {
        console.error('Failed to load user token:', e);
      } finally {
        setIsLoading(false);
      }
    };
    checkToken();
  }, []);

  const login = async () => {
    await saveToken();
    setIsLoggedIn(true);
  };

  const logout = async () => {
    await removeToken();
    setIsLoggedIn(false);
  };

  const contextValue = {
    userToken: isLoggedIn,
    login,
    logout,
    isLoading,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

const useUserContext = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('Provider error');
  }

  return context;
};

export { UserProvider, useUserContext };
