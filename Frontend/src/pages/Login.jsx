import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // Added for displaying error messages
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Reset error message on new submission

    if (!username || !password) {
      setErrorMessage("Username and password are required.");
      return;
    }

    try {
      const response = await axios.post(`${BASE_URL}/api/v1/users/login`, {
        username,
        password,
      });
      if (response.status === 200) {
        navigate("/"); // Navigate to home page or dashboard on successful login
      } else {
        setErrorMessage(`Login failed with status code: ${response.status}`);
      }
    } catch (error) {
      console.error("Login error:", error);
      setErrorMessage("Login failed. Please try again."); // Display this error message to the user
    }
  };
  return (
    <main className="flex justify-center items-center py-40">
      <div className="bg-white w-4/5 max-w-[620px] p-10 rounded-xl">
        <h1 className="font-herfonty text-4xl text-pink-600 uppercase flex justify-center items-center gap-2">
          Login <CgProfile size={45} />
        </h1>
        {errorMessage && (
          <div className="text-red-500 text-center mb-4">{errorMessage}</div>
        )}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-10 pt-10 font-herfonty"
        >
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="bg-[rgba(82,182,232,0.3)] rounded-lg p-3 outline-none shadow-md text-pink-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[rgba(82,182,232,0.3)] rounded-lg p-3 outline-none shadow-md text-pink-500"
          />
          <button
            type="submit"
            className="bg-pink-600 rounded-lg p-3 text-xl font-bold text-white hover:bg-pink-700"
          >
            Login
          </button>
          <div className="border-b-2"></div>
          <h2 className="flex gap-2 items-center justify-center">
            New here?
            <Link
              to="/register"
              className="text-lg text-black hover:text-pink-600 hover:underline"
            >
              Register Account!
            </Link>
          </h2>
        </form>
      </div>
    </main>
  );
}

export default Login;
