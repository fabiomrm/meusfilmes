import React, { createContext, useContext, useEffect, useState } from 'react';
import { TokenData } from 'types';
import { getTokenData, isAuthenticated } from 'utils/auth';

type AuthContextData = {
  authenticated: boolean;
  tokenData?: TokenData;
};

type AuthContextType = {
  authContextData: AuthContextData;
  setAuthContextData: (authContextData: AuthContextData) => void;
};

const AuthContext = createContext<AuthContextType>({
  authContextData: {
    authenticated: false,
  },
  setAuthContextData: () => {},
});

export const AuthContextProvider: React.FC = ({ children }) => {
  const [authContextData, setAuthContextData] = useState<AuthContextData>({
    authenticated: false,
  });

  useEffect(() => {
    if (isAuthenticated()) {
      setAuthContextData({
        authenticated: true,
        tokenData: getTokenData(),
      });
    } else {
      setAuthContextData({
        authenticated: false,
      });
    }
  }, []);

  const value = { authContextData, setAuthContextData };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error('useAuth used outside provider');
  }

  return context;
};
