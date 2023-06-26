import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setAuth] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setAuth(true);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
