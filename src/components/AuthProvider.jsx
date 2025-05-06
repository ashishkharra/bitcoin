import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username,setUsername] = useState('')

  const login = (username) => {
    setIsAuthenticated(true);
    setUsername(username);
  };
  const logout = () => {
    setIsAuthenticated(false)
    setUsername('')
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, username }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);