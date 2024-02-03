import React from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import freedomfairy from "../assets/butterfly.png";

function Nav() {
  const [Navbar, setNav] = useState(false);

  const handleNav = () => {
    setNav(!Navbar);
  };

  return (
    <nav className="bg-[rgba(132,62,250,0.2)] p-5 px-8 font-herfonty shadow-lg">
      <div className="flex items-center justify-between">
        <Link
          to="/"
          className="text-white text-5xl font-semibold flex items-center"
        >
          <img
            src={freedomfairy}
            className="w-20 h-20 hover:animate-bounce ease-in-out duration-300"
          />
          FreedomHER
        </Link>
        <ul className="hidden md:flex items-center md:gap-10 lg:gap-14">
          <li>
            <Link
              to="/home"
              className="text-white hover:underline text-2xl lg:text-3xl"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/forum"
              className="text-white hover:underline text-2xl lg:text-3xl"
            >
              Forum
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-white hover:underline text-2xl lg:text-3xl"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/Login"
              className="text-white hover:underline text-2xl lg:text-3xl"
            >
              Login
            </Link>
          </li>
        </ul>
        <div onClick={handleNav} className="md:hidden">
          {Navbar ? (
            <IoCloseSharp size={40} color="white" />
          ) : (
            <RxHamburgerMenu size={40} color="white" />
          )}
        </div>
      </div>
      <div
        className={
          Navbar
            ? "fixed left-0 top-0 w-[40%] h-full  pl-4 text-white  bg-white/10 pt-3 backdrop-blur-md ease-in-out duration-300 z-50 md:hidden"
            : "fixed left-[-100%] top-0 w-[40%] h-full  text-white  bg-white/10 pt-3 backdrop-blur-md  ease-in-out duration-300 z-50 md:hidden"
        }
      >
        <ul className="uppercase flex flex-col gap-5 font-herfont pt-8">
          <li>
            <Link to="/" className="text-white hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/forum" className="text-white hover:underline">
              Forum
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link to="/Login" className="text-white hover:underline">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
