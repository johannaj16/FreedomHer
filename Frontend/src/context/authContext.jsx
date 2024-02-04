import React, { createContext, useState, useContext } from "react";

// Create a context
const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  // Function to handle login
  const login = async (username, password) => {
    // Perform login operation and set the user
    // For example, using Axios:
    // const response = await axios.post('/api/login', { username, password });
    // setCurrentUser(response.data.user);
  };

  // Function to handle logout
  const logout = () => {
    setCurrentUser(null);
    // Perform additional logout operations if necessary
  };

  const value = {
    currentUser,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
