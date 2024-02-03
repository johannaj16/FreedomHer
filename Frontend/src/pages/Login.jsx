import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the login logic here
    console.log("Username:", username, "Password:", password);
    // Add your authentication logic or API call here
  };

  return (
    <main className="flex justify-center items-center py-40">
      <div className="bg-white w-4/5 max-w-[620px] p-10 rounded-xl">
        <h1 className="font-herfonty text-4xl  text-pink-600 uppercase flex justify-center items-center gap-2">
          Login <CgProfile size={45} />
        </h1>
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
          <button className="bg-pink-600 rounded-lg p-3 text-xl font-bold text-white hover:bg-pink-700">
            login
          </button>
          <div className=" border-b-2"></div>
          <h2
            className="flex gap-2 items-center justify-center
          "
          >
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
