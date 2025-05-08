import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser?.username) {
      setIsAuthenticated(true);
      setUsername(storedUser.username);
    }
    setLoading(false); // Set loading to false once the auth check is done
  }, []);

  const login = (username) => {
    setIsAuthenticated(true);
    setUsername(username);
    localStorage.setItem('user', JSON.stringify({ username }));
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUsername('');
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, username, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);