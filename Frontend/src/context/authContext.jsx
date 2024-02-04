import React, { createContext, useState, useContext } from "react";
import axios from "axios";
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Create a context
const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  // Function to handle login
  const login = async (username, password) => {
    try {
      const response = await axios.post(`${BASE_URL}/api/v1/users/login`, {
        username,
        password,
      });
      //Note that response.data json object should be only returning the username and profileImage link. Ask aarush for more details
      setCurrentUser(response.data); // Assuming the user data is in response.data.user
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
      throw error; // Rethrow the error to handle it in the component
    }
  };

  //Handle registration logic
  const register = async (username, password) => {
    try {
      const response = await axios.post(`${BASE_URL}/api/v1/users/register`, {
        username,
        password,
      });
      //Note that response.data json object should be only returning the username and profileImage link. Ask aarush for more details
      setCurrentUser(response.data); // Set user data on successful registration
    } catch (error) {
      console.error(
        "Registration error:",
        error.response?.data || error.message
      );
      throw error; // Rethrow the error to handle it in the component
    }
  };

  // Function to handle logout
  const logout = async () => {
    try {
      await axios.get(`${BASE_URL}/api/v1/users/logout`);
      setCurrentUser(null);
    } catch (error) {
      console.error("Logout error:", error.response?.data || error.message);
      throw error; // Handle errors appropriately
    }
  };

  const value = {
    currentUser,
    login,
    logout,
    register,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
