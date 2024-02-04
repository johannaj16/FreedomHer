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
      const response = await axios.post(
        `${BASE_URL}/api/v1/users/login`,
        { username, password },
        { withCredentials: true } // Add withCredentials here
      );
      setCurrentUser(response.data);
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
      throw error;
    }
  };

  //Handle registration logic
  const register = async (profileImage, username, password) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/api/v1/users/register`,
        { profileImage, username, password },
        { withCredentials: true } // Add withCredentials here
      );
      setCurrentUser(response.data);
    } catch (error) {
      console.error(
        "Registration error:",
        error.response?.data || error.message
      );
      throw error;
    }
  };

  // Function to handle logout
  const logout = async () => {
    try {
      await axios.get(`${BASE_URL}/api/v1/users/logout`, {
        withCredentials: true, // Add withCredentials here
      });
      setCurrentUser(null);
    } catch (error) {
      console.error("Logout error:", error.response?.data || error.message);
      throw error;
    }
  };

  const isLogin = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/v1/users/islogin`, {
        withCredentials: true, // Add withCredentials here
      });
      if (response.status === 200) {
        console.log(response.data);
        setCurrentUser(response.data);
      } else {
        setCurrentUser(null);
      }
    } catch (error) {
      console.error(
        "Check login error:",
        error.response?.data || error.message
      );
      setCurrentUser(null);
    }
  };

  const value = {
    currentUser,
    login,
    logout,
    register,
    isLogin,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
