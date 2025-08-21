import { createContext, ReactNode, useContext, useState } from 'react';

type ContextType = {
  userToken: boolean;
  login?: () => void;
  logout?: () => void;
};

const initialState = {
  userToken: false,
  login: () => {},
  logout: () => {},
};

const UserContext = createContext<ContextType>(initialState);

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(initialState.userToken);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  const contextValue = {
    userToken: isLoggedIn,
    login,
    logout,
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
