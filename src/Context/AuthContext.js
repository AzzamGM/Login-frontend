import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Login method adjusted to store only the username
  const login = (username) => {
    const userData = { username };
    setUser(userData);
    try {
      localStorage.setItem('user', JSON.stringify(userData));
    } catch (e) {
      console.error('Failed to save user data to localStorage:', e);
    }
  };

  // Logout method
  const logout = () => {
    setUser(null);
    try {
      localStorage.removeItem('user');
    } catch (e) {
      console.error('Failed to remove user data from localStorage:', e);
    }
  };

  // Load user data from localStorage on component mount
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (e) {
      console.error('Failed to parse user data from localStorage:', e);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
